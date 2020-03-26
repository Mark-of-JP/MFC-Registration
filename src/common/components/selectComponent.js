import React, { Component } from 'react';

import {
    Select,
    FormControl,
    InputLabel
} from '@material-ui/core'

export default class SelectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selection: props.value
        }
    }

    render() {
        return (
            <FormControl variant="outlined" style = {{minWidth: 80}}>
                <InputLabel style = {{backgroundColor: 'white'}}>{this.props.label}</InputLabel>
                <Select
                    value={this.state.selection}
                    style={this.props.style}
                    onChange={(value) => {
                        this.setState({ selection: value.target.value })

                        if (this.props.onChange)
                            this.props.onChange(value.target.value)
                    }}>
                    {this.props.children}
                </Select>
            </FormControl>
        )
    }
}