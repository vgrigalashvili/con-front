export default (contacts = [], action) => {

    switch (action.type) {
        case 'GET_ALL':
            return action.payload;
        case 'CREATE':
            return contacts;
        case 'EDIT':
            return contacts;
        case 'DELETE':
            return contacts;
        case 'CALL':

        default:
            return contacts;
    }
}