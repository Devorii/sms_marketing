
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Cookies from "js-cookie";
import './Settings.css'

const SettingsPanel = () =>{

const signOut = (e) => {
e.preventDefault()

Cookies.remove('token')
console.log(Cookies.get('token'))
if(Cookies.get('token') === undefined){
    window.location = 'http://localhost:3000'
}
}

    return(
        <>
			<h4 className='pagetitle pageDesc'><b>Settings</b></h4>
			<div className='page_greeting'>
			<h2 className='pageDesc'>Your Number</h2>
			<h2 className='pageDesc'>+1 234 567 2345</h2>
			</div>

            {/* Navigation and settings */}
            <div className='SettingContent'>
                <Link to='/dashboard'>
                    <div>
                    <h5 style={{color: 'black'}}>Dashboard</h5>
                    </div>
                </Link>
                <Link to='#'>
                    <div>
                    <h5 style={{color: 'black'}}>Terms & Conditions</h5>
                    </div>
                </Link>

                    <div>
                    <input style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '13px',
                    fontWeight: '600',
                    marginLeft: '-4px'}}
                    type='button' onClick={signOut} value='Sign Out'  />
                    </div>



            </div>


        <Footer />
        </>

    )
}


export default SettingsPanel;