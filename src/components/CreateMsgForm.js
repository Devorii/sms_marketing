import React, { useEffect, useState} from "react";
import Cookies from "js-cookie";

const CreateMsgForm = (props) => {
	const [message, setmessage] = useState();

	useEffect(() => {
		setmessage(props.user);
	}, []);

	const onSubmit = (e) => {
		e.preventDefault();

		var formdata = new FormData();
		formdata.append("title", message.title);
		formdata.append("message", message.message);
		formdata.append("url", message.url);
		formdata.append("image", message.image,`${message.image.name}`);


		fetch("http://devorii.pythonanywhere.com/create-message", {
			method: "POST",
			mode: "cors",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"x-access-token": Cookies.get("token"),
			},
			body: formdata,
		})
			.then((response) => response.text())
			.then((result) => window.location= 'http://localhost:3000/messages')
			.catch((error) => console.log("error", error));
	};

	return (
		<>
			<div className='form_modal_wrapper'>
				<div>
					{
						<h2 style={{ textAlign: "left", color: "rgb(2, 68, 174)" }}>
							{" "}
							Create New Template{" "}
						</h2>
					}

					<form
						onSubmit={onSubmit}
						encType='multipart/form-data'
						id='form-data'>
						<label id='email'>Title</label>
						<input
							className='cus-input'
							type='text'
							name='title'
							placeholder='Name'
							onChange={(e) =>
								setmessage({ ...message, title: e.target.value })
							}></input>
						<label id='email'>Custom SMS Message</label>
						<textarea
							className='messagebox'
							placeholder='Write your custom sms messages here...'
							name='message'
							rows='5'
							cols='40'
							onChange={(e) =>
								setmessage({ ...message, message: e.target.value })
							}></textarea>
						<label id='email'>Url</label>
						<input
							className='cus-input'
							type='text'
							name='url'
							placeholder='www.yoururl.com/here'
							onChange={(e) =>
								setmessage({ ...message, url: e.target.value })
							}></input>
						<input
							name='image'
							id='file'
							type='file'
							accept="image/jpeg"
							onChange={(e) =>
								setmessage({ ...message, image: e.target.files[0] })
							}
						/>
						<input id='submit-btn' type='submit' value='Create Contact'></input>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreateMsgForm;
