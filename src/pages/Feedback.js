import React from "react";

export default function Feedback() {
	return (
		<div>
			<div className='pageTop'>
				<h4 className='pagetitle pageDesc'>
					<b>Feedback</b>
				</h4>

				<p style={{ marginRight: "10%", marginLeft: "9%", textAlign: "left" }}>
					Accomplishing your marketing goals is why we exist. Your feedback give
					us an opportunity to improve our product so you can reach your goals
					faster.
				</p>

				<h2 style={{ color: "black", marginTop: "50px" }}>
					How can we improve?
				</h2>

				<div style={{width: '80%', marginLeft:'9%', marginTop: '40px'}}>
					<a href='mailto:info@devorii.com?subject = "Orii...Sms FeedBack"' id='submit-btn'>Give Us FeedBack</a>
                    <p style={{marginTop:'40px'}}>info@devorii.com</p>
				</div>
			</div>
		</div>
	);
}
