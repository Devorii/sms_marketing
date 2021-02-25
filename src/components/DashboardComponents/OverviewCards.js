import React, { useState} from 'react'
import { Doughnut } from 'react-chartjs-2'


const OverviewCards = (props) =>{
    const [impressions, setImpressions] = useState({
        impressionsState : (props.reached - props.impressions)
    })

    return (

        <div className='overViewCard'>
        <div className='overviewCardInfo'>
            <h3>{props.title}</h3>
            <div id='targets'>{props.impressions} / {props.reached}</div>
            <p id='tips'>Tips: For better conversion rates. Ask your clients what they want. Engage conversations!</p>
        </div>

        <div className='overviewCardGraph'>
            <Doughnut
                data={{

                    // labels: ['pop', 'smoke'],
                    datasets: [{
                        // label: 'Points',
                        backgroundColor: ['#0244AE'],
                        // props.impression (reached-impressions )
                        data:[props.impressions, impressions.impressionsState],
                        borderColor: ['#E7E7F7']
                    }]
                }}
            />
        </div>
        </div>
    )
}
export default OverviewCards;