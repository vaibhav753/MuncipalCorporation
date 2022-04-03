import React from 'react'
import "./CovidTable.css"
import numeral from "numeral";

function Table({ countries }) {
    return (
        <div className='covidTable'>
            {
                countries.map(country => (
                    <tr>
                        <td>{country.country}</td>
                        <td><strong>{numeral(country.cases).format("0,0")}</strong></td>
                    </tr>
                ))
            }
        </div>
    )
}

export default Table
