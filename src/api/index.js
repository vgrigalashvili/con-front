import axios from 'axios'

const token = localStorage.getItem('token')
const url = 'http://localhost:5000/api/contacts/getcontacts';
const method = 'get';
const headers = { Authorization: 'Bearer ' + token }

export const featchContacts = () => axios.get(url, method, headers);