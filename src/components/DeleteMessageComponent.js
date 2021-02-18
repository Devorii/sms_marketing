import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie";



const DeleteMessageComponent = (props) =>{
    // Thought of cheat until other solution is found

console.log(props.cond)




// console.log(controller)

const closeModal = () =>{
    props.onNameChange('closeDelete')
    // setController('closeDelete')
// saves
}
    const deleteFunc = () => {
        fetch(`http://localhost:5000/delete-messages/${props.selected}`,{
            method: 'DELETE',
            mode: 'cors',
            headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"Access-Control-Allow-Origin": "*",
			"x-access-token": Cookies.get("token"),
            }
        }).then((response) => response.json())
        .then((resp) => {
            window.location.reload()
        })
    }

    return(
        <>
        <div className={`deleteMessageCard ${props.cond}`}>
            <div className="deleteCard">
            <h3 style={{marginTop: '0px'}}>Are you sure?</h3>
            {/* <button onClick={cancelClick} id='submit-btn-update'>Cancel</button> */}
            <div style={{display: 'flex', flexDirection:'row-reverse'}}>
            <button onClick={deleteFunc} id='submit-btn-update'>Delete</button>
            <button className='cancelBtn' onClick={closeModal} id='submit-btn-update'>Cancel</button>

            </div>
            </div>


        </div>
        </>
    )
}
export default DeleteMessageComponent;