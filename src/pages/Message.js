import React, { useEffect, useState, useContext } from "react";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import CreateMsgbutton from "../components/Createmsgbutton";
import DeleteMessageComponent from "../components/DeleteMessageComponent";
import UpdateMessages from "../components/UpdateMessages";
import { ContactContext } from "../context/ContactsCtxt"
import Delete from '../assets/messageIcons/delete.svg'
import Update from '../assets/messageIcons/update.svg'
import Send from '../assets/messageIcons/send.svg'


const Message = (props) => {
	const {contacts} = useContext(ContactContext)


	const [messageItem, setMessageItem] = useState({
		items: null,
		loaded: false,
	});
	const [updateStyle, setUpdateStyle] = useState({
		width: "100%",
		display: "flex",
		justifyContent: "center",
	});
	const [updateStyleNone, setUpdateStyleNone] = useState({
		width: "100%",
		display: "none",
		justifyContent: "center",
	});
	const [selectID, setSelectID] = useState({
		id: 0,
		loaded: false,
	});
	const [message, setMessage] = useState({
		id: "",
		title: "",
		message: "",
		url: "",
		loaded: false,
	});
	const [deleteOnClick, setDeleteOnClick] = useState('closeDelete');

	const [closeBtn, SetCloseBtn] = useState({
		top: "0",
		right: "0",
		marginTop: '20px',
		marginRight: '20px',
		position: "fixed",
		backgroundColor: "red",
		width: '29px',
		height: '29px',
		border: "none",
		borderRadius: '100px',
		padding: "5px",
		fontSize: "15px",
		color: "white",
	});
	const [showUpdate, setShowUpdate] = useState(false);

	const exOnClick = () => setShowUpdate(!showUpdate);
	const updateOnClick = () => setShowUpdate(true);

	useEffect(() => {
		var storedTitle;

		fetch("http://devorii.pythonanywhere.com/onload-messages", {
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
				setMessageItem({ items: Object.values(items), loaded: true });
				// Call another fetch to return an obj
				setSelectID({ id: Object.values(items)[0].id, loaded: true });
				storedTitle = Object.values(items)[0].title;

				return fetch(
					`http://devorii.pythonanywhere.com/template/${Object.values(items)[0].id}`,
					{
						method: "GET",
						mode: "cors",
						headers: {
							"Content-Type": "application/x-www-form-urlencoded",
							"Access-Control-Allow-Origin": "*",
							"x-access-token": Cookies.get("token"),
						},
					}
				);
			})
			.then((response) => response.json())
			.then((resp_items) => {
				setMessage({
					id: Object.values(resp_items)[0].id,
					title: storedTitle,
					message: Object.values(resp_items)[0].Message,
					url: Object.values(resp_items)[0].url,
					loaded: true,
				});
			});
	}, []);

	// SELECTED TEMPLATES
	const selectedTemplate = (e) => {
		var index = e.target.selectedIndex;
		const selection_id = e.target.value;

		setSelectID({ id: selection_id, loaded: true });

		fetch(`http://devorii.pythonanywhere.com/template/${selection_id}`, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Access-Control-Allow-Origin": "*",
				"x-access-token": Cookies.get("token"),
			},
		})
			.then((response) => response.json())
			.then((resp_items) => {
				setMessage({
					id: Object.values(resp_items)[0].id,
					title: e.target[index].text,
					message: Object.values(resp_items)[0].Message,
					url: Object.values(resp_items)[0].url,
					loaded: true,
				});
			});
	};

	// Deleting selection
	const deleteSelected = () => {
		setDeleteOnClick('openDelete')
	};
const updateParentState = (childProps) =>{
setDeleteOnClick(childProps)
}
	//Sending messages
	const sendingmessages = () => {
		const send_contacts = []
		const send_names = []
		const send_msg = message.message
		const send_img = `http://devorii.pythonanywhere.com/images/${selectID.id}`
		const send_temp_name = message.title
		const send_temp_id = message.id

		const send_url = message.url

		const listOfContacts = contacts[0].contacts.items
		listOfContacts.map((obj)=>{
			send_contacts.push(obj.number)
			send_names.push(obj.name)
		})

		console.log(send_contacts)
		fetch(`http://devorii.pythonanywhere.com/send-messages`, {
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify({
				api_numbers: send_contacts,
				api_names: send_names,
				api_msg: send_msg,
				api_url: send_url,
				api_img: send_img,
				api_title: send_temp_name,
				api_id: send_temp_id

			}),
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Access-Control-Allow-Origin": "*",
				"x-access-token": Cookies.get("token"),
			}


		})
	}
	//  Render load conditions
	var { loaded } = messageItem;

	if (!loaded) {
		return (
			<>
				<p>Loading...</p>
			</>
		);
	} else {
		return (
			<>
				<div className='app-bg'>

				<h4 className='pagetitle pageDesc'><b>Template</b></h4>

			<div className='page_greeting messageIconsParentContainer'>
			<h2 className='pageDesc'>View Templates</h2>
			<div>
				<img style={{width: '18px', height: '18px', marginLeft: '40px', marginTop: '10px'}} onClick={deleteSelected} src={Delete} alt=''></img>
				<img style={{width: '18px', height: '18px', marginLeft: '10px', marginTop: '10px'}} onClick={updateOnClick} src={Update} alt=''></img>
				<img style={{width: '18px', height: '18px', marginLeft: '10px', marginTop: '10px'}} onClick={sendingmessages} src={Send} alt=''></img>

			</div>

			</div>
			<select id='selectId' onChange={selectedTemplate}>
						{messageItem.items.map((obj) => (
							<option
								style={{
									color: "#6B6B6B",
									display: "flex",
									flexDirection: "column",
								}}
								key={obj.id}
								name={obj.title}
								value={obj.id}>
								{obj.title}
							</option>
						))}
					</select>

					<div className='cardHolder'>
						<div className='message_card'>
							<div className='image_holder'>
								<img
									className='displayImg'
									src={
										selectID.loaded
											? `http://devorii.pythonanywhere.com/images/${selectID.id}`
											: `http://devorii.pythonanywhere.com/images/4`
									}
									alt='content_image'
								/>
								<p
									style={{
										textAlign: "left",
										paddingLeft: "20px",
										paddingRight: "20px",
										marginBottom: "2px",
									}}>
									{message.loaded ? message.message : "No message found"}
								</p>
								<p
									style={{
										textAlign: "left",
										paddingLeft: "20px",
										paddingRight: "20px",
										color: "blue",
										textDecoration: "underline",
										marginTop: "1px",
									}}>
									{message.loaded ? message.url : "No url found"}
								</p>
							</div>
						</div>
					</div>


					{/* Delete message component */}
					<div>
						<DeleteMessageComponent
							selected={selectID.id}
							cond={deleteOnClick}
							onNameChange = {updateParentState}
						/>
					</div>

					<div style={showUpdate ? updateStyle : updateStyleNone}>
						<button onClick={exOnClick} style={closeBtn}>
							X
						</button>
						<UpdateMessages
							id={selectID.id}
							title={message.title}
							message={message.message}
							url={message.url}
						/>
					</div>

					<div className='msgBtn'>
						<CreateMsgbutton />
					</div>
					<Footer />
				</div>
			</>
		);
	}
};

export default Message;
