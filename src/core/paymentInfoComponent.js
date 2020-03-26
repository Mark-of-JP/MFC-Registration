import React, {Component} from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
    Card,
    CardContent,
    CardHeader,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography
} from '@material-ui/core'

export default class PaymentInfoCard extends Component {

    render() {
        return (
            <Card raised={true} style={{ marginBottom: 10, width: 850 }}>
                    <CardHeader title="Payment Information" />
                    <CardContent>
                        <ExpansionPanel >
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Conference Fee</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <p>$85 per person which includes meals, t-shirt & conference kit (plus one souvineir program per customer)</p>
                                    <p>($80 early bird special for PAID registration by March 31st)</p>
                                    <p>DEADLINE FOR REGISTRATION: June 20, 2020</p>
                                    <p>Post-dated cheques must be dated before and no later than June 30, 2020</p>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel >
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Instructions for Payment</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <p>For Cheque payment dated up to Feb 29, please make cheque payable to Community For Christ Foundation for Family and Life</p>
                                    <p>For Cheque payment dated up to Feb 29, please make cheque payable to Missionaries Families of Chirst</p>
                                    <p>For e-transfer payment: Please send it to cfcffl.torontofinancy@yahoo.ca and use the answer to the security question as ERC2020</p>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </CardContent>
                </Card>
        )
    }
}