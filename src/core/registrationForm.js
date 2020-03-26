import React, { Component } from 'react';
import '../common/styles/App.css';

import logo from '../common/images/mfc-logo.png'

import {
    Button, Card, CardHeader, Box
} from '@material-ui/core'

import PersonalInfoCard from './personalInfoCard.js'
import SpouseInfoCard from './spouseInfoComponent.js'
import EmergencyInfoCard from './emergencyInfoComponent.js'
import PaymentInfoCard from './paymentInfoComponent.js'
import AddChildCard from './addChildComponent.js'

import { formatInput } from '../common/util/inputFormatter.js'
import { sendMail } from '../common/util/mailer.js'

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.raw = {
            chapter: "Brampton",
            section: "Couples",
            shirt_size: "M",
            spouse_section: "Couples",
            spouse_size: "M"
        }
        this.state = {
            hasPressed: false,
            hasSubmitted: false,
            hasFailed: false
        }

        this.generateForm = () => {
            if (!this.state.hasSubmitted) {
                return (
                    <Box>
                        <PersonalInfoCard info={this.raw} />
                        <SpouseInfoCard info={this.raw} />
                        <EmergencyInfoCard info={this.raw} />
                        <PaymentInfoCard />
                        <AddChildCard info={this.raw} />

                        <Button variant="contained"
                            onClick={() => {
                                this.setState({hasPressed: true})

                                if (!this.state.hasPressed) {
                                    console.log(formatInput(this.raw))
                                    sendMail({
                                        name: `${this.raw.first_name} ${this.raw.last_name}`,
                                        registration: formatInput(this.raw)
                                    })
                                    .then((response) => {
                                        if(response.status != 200)
                                            throw new Error()
                                        else
                                            this.setState({hasSubmitted: true})
                                    })
                                    .catch(() => {
                                        this.setState({hasFailed: true, hasSubmitted: true})
                                    })
                                }
                            }}>
                            Submit
                        </Button>
                    </Box>)
            } else {
                return (
                    <Box>
                        <Card>
                            <CardHeader title={this.state.hasFailed ? "Error Occured Please Retry or Contact Help" : "Submitted!"} />
                        </Card>
                        <Button variant="contained"
                            onClick={() => {
                                this.setState({hasPressed: false, hasSubmitted: false, hasFailed: false})
                            }}>
                            New Submission
                        </Button>
                    </Box>
                )
            }
        }
    }

    render() {
        return (
            <header className="App-header">
                <img src={logo} width={1000} />
                <h2 style={{ color: 'black', fontFamily: '"Segoe UI"' }} >Conference Registration Form</h2>

                {this.generateForm()}


            </header>
        )
    }
}
