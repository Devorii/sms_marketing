import React, { useState } from "react";
import Cookies from "js-cookie";



const PopupModal = (props) =>{
    const [propsInfo, setPropsInfo] = useState({
        id: props.id,
        name: props.name,
        number: props.num
    })
    const [user, setUser] = useState()

    const submit = e => {
        e.preventDefault()

        fetch(`http://devorii.pythonanywhere.com/update-contacts/${props.id}`,{
            method: 'PUT',
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


            }
        })

    }
    const deleteBtn = e => {
        e.preventDefault()

        fetch(`http://devorii.pythonanywhere.com/delete-contacts/${props.id}`,{
            method: 'DELETE',
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


            }

        })
    }



    return(
        <>
        <div  className='form_modal_wrapper'>
            <div>
            {<h2 style={{textAlign: 'left', color: 'rgb(2, 68, 174)'}}> {props.name} </h2>}
			<form onSubmit={submit} id='form-data'>
				<label id='email'>Name</label>
				<input
					className='cus-input'
					type='text'
                    name='name'
                    value={propsInfo.name}
					onChange={(e) =>{
                        setPropsInfo({name: e.target.value})
                        setUser({name: e.target.value, number: props.num})
                    }}>
				</input>
				<label id='email'>Number</label>
				<input
					className='cus-input'
					name='user'
                    type='tel'
                    pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                    value={propsInfo.number}
                    onChange={(e) =>
                        {
                            setPropsInfo({ number: e.target.value})
                            setUser({name: props.name, number: e.target.value})

                        }
						}
				></input>
                <div className='submitBtnDiv'>
                <input id='submit-btn-update' type='submit' value='Update'></input>
                <input id='submit-btn-update' type='button' value='Delete' onClick={deleteBtn}></input>
                </div>

			</form>
            </div>
		</div>

        </>
    )

}

export default PopupModal;