import React from 'react'

function TableCard({ item, index }) {
    const today = new Date();

    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = month + "/" + date + "/" + year;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item.kimdan}</td>
            <td>{item.kimga}</td>
            <td>{item.card}</td>
            <td>{currentDate}</td>
        </tr>
    )
}

export default TableCard