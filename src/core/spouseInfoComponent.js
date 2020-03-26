import React, {Component} from 'react'

import SelectComponent from '../common/components/selectComponent.js'

import {
    Container,
    TextField,
    Card,
    CardContent,
    CardHeader,
    MenuItem
} from '@material-ui/core'

export default class SpouseInfoCard extends Component {
    
    constructor(props) {
        super(props)

        this.addInput = (key, input) => {
            this.props.info[key] = input
        }
    }

    render() {
        return (
            <Card raised={true} style={{ marginBottom: 10, width: 850 }}>
                    <CardHeader title="Spouse Information" />

                    <CardContent>
                        <Container style={{ paddingBottom: 10 }}>
                            <TextField style={{ paddingBottom: 10, paddingRight: 30 }} label="Spouse Name" onChange={(val) => { this.addInput("spouse_name", val.target.value)}}/>
                            <TextField style={{ paddingBottom: 10, paddingRight: 30 }} label="Spouse Nickname" onChange={(val) => { this.addInput("spouse_nick", val.target.value)}}/>

                            <SelectComponent label = "Section" value="Couples" style={{ marginRight: 30 }} onChange={(val) => { this.addInput("spouse_section", val)}}>
                                <MenuItem value="Couples">Couples</MenuItem>
                                <MenuItem value="Servant">Servant</MenuItem>
                                <MenuItem value="Handmaid">Handmaid</MenuItem>
                            </SelectComponent>
                            <SelectComponent label = "Shirt Size" value="M" onChange={(val) => { this.addInput("spouse_size", val)}}>
                                <MenuItem value="S">S</MenuItem>
                                <MenuItem value="M">M</MenuItem>
                                <MenuItem value="L">L</MenuItem>
                                <MenuItem value="XL">XL</MenuItem>
                                <MenuItem value="2XL">2XL</MenuItem>
                                <MenuItem value="5XL">5XL</MenuItem>
                            </SelectComponent>
                        </Container>

                        <TextField style={{ paddingBottom: 10, paddingRight: 30, width: 500 }} label="Special Need/Diet" onChange={(val) => { this.addInput("spouse_accomodations", val.target.value)}} />
                    </CardContent>
                </Card>
            )
    }
}