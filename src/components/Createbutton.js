import React, { useState } from "react";
import Cookies from "js-cookie";
import FormModal from "./CreateContact";
import CreateContacts from '../assets/createContacts.svg'
import CreateContactsClose from '../assets/createContactsClose.svg'
import { ContactContext } from "../context/ContactsCtxt";

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
        // if(stats.state === 'false'){}
        // setopenModal({style:{display: 'flex', justifyContent: "center", margin: '0px' }})
        // console.log(openModal)
    }


	return (
		<>
          {/* #0244AE #34A1AD */}
        <div style={toggle ? openModal.style : closeModal.style}>
        <FormModal />
        </div>
        {toggle
        ?
        <img className='create-btn' src={CreateContactsClose} alt='create-contacts' onClick={ openNow } />
        :
        <img className='create-btn' src={CreateContacts} alt='create-contacts-close' onClick={ openNow } />
        }

			{/* <input type='button' style={{color: '#100D84'}} onClick={ openNow } className='create-btn'   /> */}
                {/* {toggle ? 'Close': 'Create New Contact'} */}
		</>
	);
};

export default Createbutton;
