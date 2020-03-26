import React, { Component } from 'react'

import {
    Container,
    TextField,
    Card,
} from '@material-ui/core'

export default class ChildInfoComponent extends Component {
    constructor(props) {
        super(props)

        this.addInput = (key, input) => {
            this.props.info[key] = input
            this.props.addInfo()
        }

        this.state = {
            name: this.props.info.name,
            age: this.props.info.age,
            needs: this.props.info.needs,
            hi: this.props.info.hi
        }
    }

    render() {
        return (
            <Card style = {{marginBottom: 5}}>
                <Container>
                    <TextField style={{ paddingBottom: 10, paddingRight: 30 }} value = {this.state.name} label={"Child Name " + this.props.number} onChange={(val) => { this.addInput("name", val.target.value); this.setState({name: val.target.value}) }} />
                    <TextField style={{ paddingBottom: 10, paddingRight: 30, width: 30 }} value = {this.state.age} label="Age" onChange={(val) => { this.addInput("age", val.target.value); this.setState({age: val.target.value}) }} />
                    <TextField style={{ paddingBottom: 10, paddingRight: 30 }} value = {this.state.needs} label="Special Needs" onChange={(val) => { this.addInput("needs", val.target.value); this.setState({needs: val.target.value}) }} />
                    <TextField style={{ paddingBottom: 10 }} value = {this.state.hi} label="Health Insurance Number" onChange={(val) => { this.addInput("hi", val.target.value); this.setState({hi: val.target.value}) }} />
                </Container>
            </Card>
        )
    }
}