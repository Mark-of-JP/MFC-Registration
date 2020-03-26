import React, {Component} from 'react'

import {
    Container,
    TextField,
    Card,
    CardContent,
    CardHeader,
} from '@material-ui/core'

export default class EmergencyInfoCard extends Component {
    
    constructor(props) {
        super(props)

        this.addInput = (key, input) => {
            this.props.info[key] = input
        }
    }

    render() {
        return (
            <Card raised={true} style={{ marginBottom: 10, width: 850 }}>
                    <CardHeader title="Emergency Info" />

                    <CardContent>
                        <Container style={{ paddingBottom: 10 }}>
                            <TextField style={{ paddingBottom: 10, paddingRight: 30 }} label="Emergency Contact" onChange={(val) => { this.addInput("emergency_contact", val.target.value)}} />
                            <TextField style={{ paddingBottom: 10, paddingRight: 30 }} label="Phone Number" onChange={(val) => { this.addInput("emergency_number", val.target.value)}} />
                            <TextField style={{ paddingBottom: 10 }} label="Health Insurance Number" onChange={(val) => { this.addInput("hi_number", val.target.value)}} />
                        </Container>
                    </CardContent>
                </Card>
        )
    }
}