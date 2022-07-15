import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode'


const Contacts = () => {
    const navigate = useNavigate()
    const [contacts, setContacts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token)
            console.log(decoded)
            if (!decoded.userName) {
                localStorage.removeItem('token')
                alert('Ivalid Token');
                return navigate('/signin');
            }
        }
        axios({
            method: 'get',
            url: 'http://localhost:5000/api/contacts/getcontacts',
            headers: { Authorization: 'Bearer ' + token },
        })
            .then(res => {
                console.log(res.data.data)
                setContacts(res.data.data)
            })
            .catch(err => {
                alert('Unauthorized access detected.')
            })
    }, [])
    return (
        <div>
            <input type='text' placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }} />
            {contacts.filter((contact) => {
                if (searchTerm === '') {
                    return 'contact'
                } else if (
                    contact.contactName.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return contact
                } else if (contact.contactPhone.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return contact
                }
            }).map(contact => (
                <li key={contact._id}>{contact.contactName}, {contact.contactPhone} </li>
            ))}
        </div>
    )
}
export default Contacts





