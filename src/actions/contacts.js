import * as api from '../api';

// Action Creators.

export const getContacts = () => async (dispach) => {
    try {
        const { data } = await api.featchContacts()
        dispach({ type: 'GET_ALL', payload: data })
        console.log(data)
    } catch (err) {
        console.log('ERRRROR:', err.message);
    }
}