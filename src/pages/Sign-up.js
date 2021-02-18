import React, { useState } from 'react'
import Orii from '../assets/orii.svg'
import Cookies from 'js-cookie'

const Signup = props => {
    const [signupUser, setSignupUser] = useState(props.signupUser)
    const sendDataObject = {

    }


    // Submit New User Data
    const submit = e =>{
        e.preventDefault();
        // Fetch create new

        if(signupUser.password != signupUser.confirm_password){
            return (
                console.log('password dont match')
            )
        }else{
            fetch('http://localhost:5000/sign-up', {
                method: 'POST',
                body: JSON.stringify({
                        'name': signupUser.name,
                        'email': signupUser.email,
                        'password': signupUser.password
                 }),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(Obj=> Obj.json()).then(resp =>{
                console.log(resp)
                window.location = 'http://localhost:3000'
            })
        }
    }

        return(
            <div className="login-bg">
            {/* Group contents container */}
            <div id='login-group'>
                <div id='logo-container'>
                <img id='logo' src={Orii} alt='orii-logo'></img>
                </div>

                <div id='form-container'>
                      <form onSubmit={submit} id='form-data'>
                      <label id='email'>Name</label>
                      <input className='cus-input' type='text' name='signupUser[name]' placeholder='Name' onChange={e => setSignupUser({...signupUser, name: e.target.value })}></input>
                      <label id='email'>Email</label>
                      <input className='cus-input' type='text' name='signupUser[email]' placeholder='Email' onChange={e => setSignupUser({...signupUser, email: e.target.value })}></input>
                      <label id='email'>Password</label>
                      <input className='cus-input' name='signupUser[password]' type='text' placeholder='Password' required onChange={e => setSignupUser({...signupUser, password: e.target.value })}></input>
                      <label id='email'>Confirm Password</label>
                      <input className='cus-input' name='signupUser[password]' type='text' placeholder='ConfirmPassword' required onChange={e => setSignupUser({...signupUser, confirm_password: e.target.value })}></input>
                      <input id='submit-btn' type='submit' value='Sign Up'></input>
                    </form>
                </div>
            </div>



            </div>
        )
}

export default Signup;