import React, { useState } from "react";
import CreateMsgForm from "./CreateMsgForm";
import CreateMessageIcon from '../assets/messageIcons/create.svg'
import CreateContactsClose from '../assets/createContactsClose.svg'

const CreateMsgbutton = (props) => {
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
        <CreateMsgForm />
        </div>
        {toggle
        ?
        <img className='create-btn' src={CreateContactsClose} alt='create-message-close' onClick={ openNow } />
        :
        <img className='create-btn' src={CreateMessageIcon} alt='create-message' onClick={ openNow } />
        }
		</>
	);
};

export default CreateMsgbutton;
