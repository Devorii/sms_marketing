import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Wave from "../assets/wave.png";
import Cookies from "js-cookie";
import OverviewCards from "../components/DashboardComponents/OverviewCards";

const Dashboard = () => {
	const [active, setActive] = useState(false);
	const [buttonStyle, setButtonStyle] = useState({
		active: {
			// #34a1ad
			background: "#0244ae",
		},
		notActive: {
			background: "none",
			color: "grey",
		},
	});

	const overviewOnclick = (e) => {
		setActive(false);
	};
	const monthOnclick = (e) => {
		setActive(true);
	};
	const [analytics, setAnalytics] = useState({
		data: "",
		loaded: false,
	});

	useEffect(() => {
		fetch("http://devorii.pythonanywhere.com/analytics", {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Access-Control-Allow-Origin": "*",
				"x-access-token": Cookies.get("token"),
			},
		})
			.then((response) => response.json())
			.then((resp) => {
				console.log(Object.values(resp));
				setAnalytics({
					data: Object.values(resp),
					loaded: true,
				});
			});
	}, []);

	return (
		<div className='app-bg'>
			<div className='pageTop'>
				<h4 className='pagetitle'>
					<b>dashboard</b>
				</h4>
			</div>
			<div className='page_greeting'>
				<h2>Welcome,</h2>
				<h2>
					I'm Orii sms <img id='waveIcon' src={Wave} alt='wave'></img>
				</h2>

				<div className='dashboard_view_buttons'>
					<button
						className='dash_buttons'
						onClick={overviewOnclick}
						style={active ? buttonStyle.notActive : buttonStyle.active}>
						Overview
					</button>
					{/* <button
						className='dash_buttons'
						onClick={monthOnclick}
						style={active ? buttonStyle.active : buttonStyle.notActive}>
						February
					</button> */}
				</div>

				<div>
					{analytics.loaded ? (
						<ul style={{paddingLeft: '0px'}}>
							{analytics.data.map((data) => (
                                <li>
                                    <OverviewCards title={data.names} impressions={data.impressions} reached = {data.reached} />
                                </li>

                            ))}
						</ul>
					) : (
						<h4>Empty</h4>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;
