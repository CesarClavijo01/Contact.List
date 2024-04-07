import { useState, useEffect } from "react"
import ContactRow from './ContactRow.jsx'

export default function ContactList({setSelectedId}){
const [contacts, setContacts] = useState([]);

useEffect( () => {
    async function fetchContacts(){
        try{
            const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
            const result = await response.json();

            setContacts(result);
        }
        catch(err){
            console.error(err);
        }

    }
    fetchContacts();
}, []);

    return(
        <table>
            <thead>
                <tr>
                    <th colSpan={3}>Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {
                    contacts.map((contact) => {
                        return(<ContactRow key={contact.id} contact={contact} setSelectedId={setSelectedId}/>)
                    })
                }
            </tbody>
        </table>
    );
};