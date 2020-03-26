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

export default class PersonalInfoCard extends Component {
    
    constructor(props) {
        super(props)

        this.addInput = (key, input) => {
            this.props.info[key] = input
        }
    }

    render() {
        return (
        <Card raised={true} style={{ marginBottom: 10, width: 850 }}>
            <CardHeader title="Personal Info" />

            <CardContent>
                <Container>
                    <TextField style={{ paddingBottom: 10, paddingRight: 30 }} label="First Name" onChange={(val) => { this.addInput("first_name", val.target.value)}} />
                    <TextField style={{ paddingBottom: 10, paddingRight: 30 }} label="Last Name" onChange={(val) => { this.addInput("last_name", val.target.value)}} />
                    <TextField style={{ paddingBottom: 10 }} label="Nickname" onChange={(val) => { this.addInput("nick_name", val.target.value)}} />
                </Container>

                <Container>
                    <TextField style={{ paddingBottom: 10, paddingRight: 30  }} label="Phone Number" onChange={(val) => { this.addInput("phone_number", val.target.value)}} />
                    <TextField style={{ paddingBottom: 10, width: 350 }} label="Email" onChange={(val) => { this.addInput("email", val.target.value)}} />
                </Container>

                <Container style={{ paddingBottom: 10 }}>
                    <SelectComponent label = "Chapter" value="Brampton" style={{ marginRight: 30 }} onChange={(val) => { this.addInput("chapter", val)}}>
                        <MenuItem value="Brampton">Brampton</MenuItem>
                        <MenuItem value="Downtown Etobicoke">Downtown Etobicoke</MenuItem>
                        <MenuItem value="Durham">Durham</MenuItem>
                        <MenuItem value="Hamilton">Hamilton</MenuItem>
                        <MenuItem value="Markham York Region">Markham York Region</MenuItem>
                        <MenuItem value="Mississauga East">Mississauga East</MenuItem>
                        <MenuItem value="Mississauga West">Mississauga West</MenuItem>
                        <MenuItem value="Scarborough Central">Scarborough Central</MenuItem>
                        <MenuItem value="Scarborough Northwest">Scarborough Northwest</MenuItem>
                        <MenuItem value="Scarborough Northeast">Scarborough Northeast</MenuItem>
                        <MenuItem value="Scarborough Southwest">Scarborough Southwest</MenuItem>
                        <MenuItem value="Scarborough Southeast">Scarborough Southeast</MenuItem>
                    </SelectComponent>
                    <SelectComponent label = "Section" value="Couples" style={{ marginRight: 30 }} onChange={(val) => { this.addInput("section", val)}}>
                        <MenuItem value="Couples">Couples</MenuItem>
                        <MenuItem value="Servant">Servant</MenuItem>
                        <MenuItem value="Handmaid">Handmaid</MenuItem>
                    </SelectComponent>
                    <SelectComponent label = "Shirt Size" value="M" onChange={(val) => { this.addInput("shirt_size", val)}}>
                        <MenuItem value="S">S</MenuItem>
                        <MenuItem value="M">M</MenuItem>
                        <MenuItem value="L">L</MenuItem>
                        <MenuItem value="XL">XL</MenuItem>
                        <MenuItem value="2XL">2XL</MenuItem>
                        <MenuItem value="5XL">5XL</MenuItem>
                    </SelectComponent>
                </Container>

                <TextField style={{ paddingBottom: 10, width: 500 }} label="Special Need/Diet" onChange={(val) => { this.addInput("accomodations", val.target.value)}}/>
            </CardContent>
        </Card>)
    }
}