import React, { Component } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ChildInfoComponent from '../common/components/childInfoComponent.js'

import {
    Card,
    CardContent,
    CardHeader,
    Button,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Container
} from '@material-ui/core'

export default class AddChildCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currNum: 0,
            childs: []
        }

        this.createChildComponents = () => {
            let components = []
            for(var i = 0; i < this.state.currNum; i++){
                components.push((<ChildInfoComponent number = {i + 1} info = {this.state.childs[i]} addInfo = {() => {this.addInput("child_info", this.state.childs)}}/>))
            }

            return components
        }

        this.addInput = (key, input) => {
            this.props.info[key] = input
        }
    }

    render() {
        return (
            <Card raised={true} style={{ marginBottom: 10, width: 850 }}>
                <CardHeader title="Children Information" />
                <CardContent>
                    <ExpansionPanel style = {{marginBottom: 10}}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Child Payment</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                <p>0-7 year olds - $15</p>
                                <p>8-12 year olds - $20</p>
                                <p>One child is free for couples with more than 2 kids</p>
                                <p>The conference will provide care for the children in designated premises. Upon the registration, the parent(s) releases the organizers from any liabilities for their children.</p>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    {this.createChildComponents()}

                    <Container>
                        <Button variant="contained"
                            style={{ marginTop: 10 }}
                            onClick={() => {
                                console.log("CHILD ADDED")

                                let newNumber = this.state.currNum + 1
                                if(this.state.childs.length < newNumber) {
                                    this.state.childs.push({name: "", age: "", needs: "", hi: ""})
                                }
                                this.addInput("child_num", "" + newNumber)
                                this.setState({currNum: newNumber})
                            }}>
                            Add Child
                        </Button>
                        <Button variant="contained"
                            style={{ marginTop: 10 }}
                            onClick={() => {
                                let newNumber = this.state.currNum - 1

                                this.addInput("child_num", "" + newNumber)
                                this.setState({currNum: newNumber})
                            }}>
                            Remove Child
                        </Button>
                    </Container>
                </CardContent>
            </Card>
        )
    }
}