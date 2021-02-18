import React, { useEffect, useState, useContext} from "react";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import Createbutton from "../components/Createbutton";
import PopupModal from "../components/Popup-box";
import {ContactContext} from "../context/ContactsCtxt"
import Sms from '../assets/sms.svg'

const Contacts = () => {
	const {contacts, dispatch} = useContext(ContactContext)


	const [twilioNumber, setTwilioNumber] = useState({'number': 'loading', 'loaded': false})

    const [popup, setPopup] = useState(false);
    const [selectedClient, setSelectedClient] = useState({
        id: '',
        name: '',
        number: ''
    })
    const [query, setQuery] = useState();

	useEffect(() => {
		// setCookies(Cookies.get('token'))
		// console.log(Cookies.get("token"));

		fetch("http://localhost:5000/read-contacts", {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Access-Control-Allow-Origin": "*",
				"x-access-token": Cookies.get("token"),
			},
		})
			.then((resp) => resp.json())
			.then((items) => {
				// setContactItem({ items: Object.values(items), loaded: true });
				dispatch({type: 'ADD_CONTACTS', contacts: { items: Object.values(items), loaded: true }});
								// Fetch twilio account number
								fetch('http://localhost:5000/twilio-number', {
									method: "POST",
									mode: "cors",
									headers: {
										"Content-Type": "application/x-www-form-urlencoded",
										"Access-Control-Allow-Origin": "*",
										"x-access-token": Cookies.get("token"),
									}
								}).then(resp => resp.json()).then(obj => setTwilioNumber({'number': obj.message, 'loaded':true }))
			});
	}, [query]);

	// var { items, loaded } = contacts;
	const loaded = contacts[0]

	function popupModal(id, name, num) {
    setPopup(!popup)
    setSelectedClient({
        id: id,
        name: name,
        number: num
    })

	}

	if (loaded === undefined) {
		return (
			<>
				<p>Loading...</p>
			</>
		);
	} else {
		return (
			<div className='app-bg'>            <div className='pageTop'>
			<h4 className='pagetitle pageDesc'><b>Contacts</b></h4>
			</div>
			<div className='page_greeting'>
			<h2 className='pageDesc'>Business Number</h2>
			<h2 className='pageDesc'>{twilioNumber.number}<img style={{marginLeft:'4px'}} id='waveIcon' src={Sms} alt='wave'></img></h2>
			</div>

				<ul className='ulStyle'>
					{contacts[0].contacts.items.map((obj) => (
						<li className='scrollDiv' style={{color:'#6B6B6B', display: 'flex', flexDirection: 'column'}} key={obj.id} onClick={() => popupModal(obj.id, obj.name, obj.number)}>
							<div style={{color:'#0244AE'}}><b>{obj.name}</b></div>
                            {obj.number}


						</li>
					))}
				</ul>
                <div id='create-btn-wrapper'>
                {popup?<PopupModal id={selectedClient.id} name={selectedClient.name} num={selectedClient.number} />:null}
                <Createbutton/>
                </div>

				<Footer />
			</div>
		);
	}
};

export default Contacts;