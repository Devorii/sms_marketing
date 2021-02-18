import React, { createContext, useReducer, useEffect} from 'react'
import { ContactReducer } from '../Reducers/ContactsReducer'


export const ContactContext = createContext()

const ContactsProvider = (props) =>{
    const initState = []
    const [contacts, dispatch] = useReducer(ContactReducer, initState, ()=>{
       const localStorageContacts = localStorage.getItem('contacts')
       return localStorageContacts ? JSON.parse(localStorageContacts) : []
    });

    useEffect(()=>{
        // set contacts into local storage
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts, dispatch])

    return (
        <ContactContext.Provider value={{contacts, dispatch}}>
            {props.children}
        </ContactContext.Provider>
    )
}
export default ContactsProvider;