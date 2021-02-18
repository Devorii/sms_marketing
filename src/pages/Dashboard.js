import React, { useState } from 'react'
import Footer from '../components/Footer'
import Wave from '../assets/wave.png'
import OverviewCards from '../components/DashboardComponents/OverviewCards'

const Dashboard = () => {
    const [active, setActive] = useState(false)
    const [buttonStyle, setButtonStyle] = useState({
        'active': {
            // #34a1ad
            background: '#0244ae'
        },
        'notActive':{
            background: 'none',
            color: 'grey'

        }
    })

    const overviewOnclick = (e)=>{

        setActive(false)
    }
    const monthOnclick = (e)=>{

        setActive(true)
    }
    return(
        <div className='app-bg'>
            <div className='pageTop'>
                <h4 className='pagetitle'><b>dashboard</b></h4>
                </div>
                <div className='page_greeting'>
                <h2>Welcome,</h2>
                <h2>Decory Herbert <img id='waveIcon' src={Wave} alt='wave'></img></h2>

                <div className='dashboard_view_buttons'>
                    <button className='dash_buttons' onClick={overviewOnclick} style={active?buttonStyle.notActive:buttonStyle.active}>Overview</button>
                    <button className='dash_buttons' onClick={monthOnclick} style={active?buttonStyle.active:buttonStyle.notActive}>February</button>
                </div>

                <div>
                    <OverviewCards />
                    <OverviewCards />
                    <OverviewCards />
                    <OverviewCards />
                    <OverviewCards />
                    <OverviewCards />
                </div>

                </div>
            <Footer />
        </div>
    )
}

export default Dashboard;