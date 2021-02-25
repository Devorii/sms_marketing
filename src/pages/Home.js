import React, { useState } from "react";
import Orii from "../assets/orii.svg";
import Cookies from "js-cookie";

const Home = (props) => {
	const [user, setUser] = useState(props.user);
	const [signupUser, setSignupUser] = useState(props.signupUser);
	const mT = true;

	const submit = (e) => {
		e.preventDefault();

		fetch("http://devorii.pythonanywhere.com/login", {
			method: "POST",
			body: JSON.stringify({ user }),
			mode: "cors",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Access-Control-Allow-Origin": "*",
			},
		})
			.then((res) => res.json())
			.then((json) => {
				if (json.status === 200) {
					// const token = String(json.token).substring(2, 118);
					const token = String(json.token).substring(2,118)
					Cookies.set("token", token, { expires: 1 });
					window.location = "http://localhost:3000/dashboard";
				} else {
				}
			});
	};

	return (
		<div className='login-bg'>
			{/* Group contents container */}
			<div id='login-group'>
				<div id='logo-container'>
					<img id='logo' src={Orii} alt='orii-logo'></img>
				</div>

				<div id='form-container'>
					<form onSubmit={submit} id='form-data'>
						<label id='email'>Email</label>
						<input
							className='cus-input'
							type='text'
							name='user[email]'
							placeholder='Email'
							onChange={(e) =>
								setUser({ ...user, email: e.target.value })
							}></input>
						<label id='email'>Password</label>
						<input
							className='cus-input'
							name='user[password]'
							type='text'
							placeholder='Password'
							onChange={(e) =>
								setUser({ ...user, password: e.target.value })
							}></input>
						<input id='submit-btn' type='submit' value='Submit'></input>
					</form>

					<div id='sign-up-link'>
						<div className='links' id='sign-up'>
							<a href='/'>Sign up</a>
						</div>
						<div className='links'>
							<a href='/'>Forgot password</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
