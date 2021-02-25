import React from 'react'
import Contact from '../assets/contact.svg'
import Template from '../assets/template.svg'
import Profile from '../assets/profile.svg'
import {Link} from 'react-router-dom'


const Footer =()=>{
return(
    <div id='footer'>
        <div id='footerIcons'>

            <Link to='/contacts'>
            <input className='footerIcons' type="image" src={Contact} />
            </Link>
            <Link to='/messages'>
            <input className='footerIcons' type="image" src={Template} />
            </Link>
            <Link to='/settings'>
            <input className='footerIcons' type="image" src={Profile} />
            </Link>

        </div>
    </div>
)
}

export default Footer;