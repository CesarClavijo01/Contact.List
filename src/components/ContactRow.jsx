import React from "react"

export default function ContactRow({setSelectedId, contact}){
    return(
        <tr onClick={() => {
            setSelectedId(contact.id);
          }}>
            <th>{contact.name}</th>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    )
}