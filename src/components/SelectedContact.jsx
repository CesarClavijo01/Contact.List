import { useEffect, useState } from "react";

export default function SelectedContact({selectedId, setSelectedId}){
    const [contact, setContact] = useState(null)

useEffect( () => {
     async function fetchSelectedContact(){
        try{
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedId}`)
            const result = await response.json();

            setContact(result)

        }
        catch(err){
            console.error(err)
        }
    
    }

    fetchSelectedContact()
}, [selectedId])

if(contact == null){
    return(
        <div>Loading</div>
    )
}

return(
<>
    <table>
        <thead>
            <tr>
                <th colSpan={2}>{contact.name}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Phone Number</th>
                <td>{contact.phone}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{contact.email}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>{contact.address.street}</td>
            </tr>
            <tr>
                <th>Company</th>
                <td>{contact.company.name}</td>
            </tr>
            <tr>
                <th>Web Site</th>
                <td>{contact.website}</td>
            </tr>
        </tbody>
    </table>
</>
)
}