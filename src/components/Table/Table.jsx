import React, { useContext } from 'react'
import { Context } from '../../App'
import TableCard from './TableCard'
import "./Table.css"

function Table() {
    const { history } = useContext(Context)
    return (
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Kimdan</th>
                    <th>Kimga</th>
                    <th>Summa</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    history.map((item, index) => (
                        <TableCard item={item} index={index} key={item.id} />
                    )
                    )
                }
            </tbody>
        </table>
    )
}

export default Table