
export const ContactReducer = (state, action) =>{
switch(action.type){
    case 'ADD_CONTACTS':
        return [{contacts: action.contacts}]
    case 'GET_CONTACTS':
        return state
    default:
        return state
}
}