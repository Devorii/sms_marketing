import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const UpdateMessages = (props) => {
	const [message, setmessage] = useState();
	const [updateInfo, setUpdateInfo] = useState({
		title: null,
		message: null,
		url: null,
		loaded: false,
	});

	useEffect(() => {
        setmessage(props.user);
		setUpdateInfo({
			title: props.title,
			message: props.message,
			url: props.url,
			loaded: true,
		});
	}, [props]);

	const onSubmit = (e) => {
		e.preventDefault();

		var formdata = new FormData();
		formdata.append("title", message.title);
		formdata.append("message", message.message);
		formdata.append("url", message.url);
		formdata.append("image", message.image, `${message.image.name}`);

		fetch(`http://devorii.pythonanywhere.com/update-messages/${props.id}`, {
			method: "PUT",
			mode: "cors",
			headers: {
				"Access-Control-Allow-Origin": "*",
				"x-access-token": Cookies.get("token"),
			},
			body: formdata,
		})
			.then((response) => response.text())
			.then((result) => window.location.reload())
			.catch((error) => console.log("error", error));
	};

	return (
		<>
			<div className='form_modal_wrapper'>
				<div>
					{
						<h2 style={{ textAlign: "left", color: "rgb(2, 68, 174)" }}>
							{`Update ${props.title}`}
						</h2>
					}

					<form
						onSubmit={onSubmit}
						encType='multipart/form-data'
						id='form-data'>
						<label id='email'>Title</label>
						<input
                        required
							className='cus-input'
							type='text'
                            name='title'
							value={updateInfo.loaded ? updateInfo.title : "Loading..."}
							onChange={(e) => {
								setUpdateInfo({ title: e.target.value, loaded: true });
								setmessage({ ...message, title: e.target.value });
							}}></input>
						<label id='email'>Custom SMS Message</label>
						<textarea
                        required
							className='messagebox'
							value={updateInfo.loaded ? updateInfo.message : "Loading..."}
							name='message'
							rows='5'
                            cols='40'
							onChange={(e) =>
								setmessage({ ...message, message: e.target.value })
							}></textarea>
						<label id='email'>Url</label>
						<input
                        required
							className='cus-input'
							type='text'
							name='url'
							value={updateInfo.loaded ? updateInfo.url : "Loading..."}
							onChange={(e) =>
								setmessage({ ...message, url: e.target.value })
							}></input>
						<input
                        required
							name='image'
							id='file'
							type='file'
							accept="image/jpeg"
							onChange={(e) =>
								setmessage({ ...message, image: e.target.files[0] })
							}
						/>
						<input id='submit-btn' type='submit' value='Update Message'></input>
					</form>
				</div>
			</div>
		</>
	);
};

export default UpdateMessages;
