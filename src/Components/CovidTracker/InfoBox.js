import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import "./InfoBox.css"
//rfce : react functional component with export
function InfoBox({ title, cases, total, ...props }) {
    return (
        <Card onClick={props.onClick} className='infoBox'>
            <CardContent>
                <Typography className='infoBox_title ' color="textSecondary">{title}</Typography>
                <h2 className='infoBox__cases'>{cases}</h2>
                <Typography className='infoBox_total' color="textSecondary">{total} Total</Typography>
            </CardContent>

        </Card>
    )
}

export default InfoBox
