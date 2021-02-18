import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const FormModal = (props) => {
    const [user, setUser] = useState()
    const [render, setRender] = useState(false)

    useEffect(()=>{
        setUser(props.user)
    }, [])

    const submit = e =>{
        e.preventDefault();

        fetch('http://localhost:5000/create-contact',{
            method: 'POST',
            body: JSON.stringify({ user }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
                "x-access-token": Cookies.get("token"),
            }
        }).then(res => res.json())
        .then(json => {
            if (json.status === 200){
                window.location = 'http://localhost:3000/contacts'
            } else{

                setRender(!render)
            }
        })
    }


	return (
        <>
        {/* <div  className='bg_blur'></div> */}
		<div  className='form_modal_wrapper'>
            <div>

            {<h2 style={{textAlign: 'left', color: 'rgb(2, 68, 174)'}}> Create New Contact </h2>}
			<form onSubmit={submit} id='form-data'>
				<label id='email'>Name</label>
				<input
					className='cus-input'
					type='text'
					name='name'
					placeholder='Name'
					onChange={(e) =>
						setUser({ ...user, name: e.target.value })}>
				</input>
				<label id='email'>Number</label>
				<input
					className='cus-input'
					name='user'
                    type='tel'
                    pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                    placeholder='647 123 4567'

					onChange={(e) =>
						setUser({ ...user, number: e.target.value })}
				></input>
				<input id='submit-btn' type='submit' value='Create Contact'></input>
			</form>
            </div>
            {/* <input id='close-btn' value='close' type='button'></input> */}
		</div>
        </>
	);
};

export default FormModal;
