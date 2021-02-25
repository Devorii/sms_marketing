import React, { useState } from "react";
import FormModal from "./CreateContact";
import CreateContacts from '../assets/createContacts.svg'
import CreateContactsClose from '../assets/createContactsClose.svg'


const Createbutton = (props) => {
    // Create Hook that opens pop-up form
    const [toggle, setToggle] = useState(false)
    const [stats, setStats] = useState({
        state: false
    })

    const [closeModal, setcloseModal] = useState({
        style: {
            margin: '0px',
            display: 'none',
            justifyContent: "center"
        }
    })
    const [openModal, setopenModal] = useState({
        style:{
            display: 'flex',
            justifyContent: "center",
            margin: '0px' }
    })
    const openNow = () => {
        setToggle(!toggle)
        console.log(toggle)
    }


	return (
		<>
        <div style={toggle ? openModal.style : closeModal.style}>
        <FormModal />
        </div>
        {toggle
        ?
        <img className='create-btn' src={CreateContactsClose} alt='create-contacts' onClick={ openNow } />
        :
        <img className='create-btn' src={CreateContacts} alt='create-contacts-close' onClick={ openNow } />
        }
		</>
	);
};

export default Createbutton;
