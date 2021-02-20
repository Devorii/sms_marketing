import React, {useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2'

const OverviewCards = () =>{

    useEffect(()=>{
        // http://localhost:5000/onload-messages
        fetch('', {

        })
console.log('testing git')

    })
    return (
        <div className='overViewCard'>
        <div className='overviewCardInfo'>
            <h3>Shoes 50% off</h3>
            <div id='targets'>4000 / 13400</div>
            <p id='tips'>Tips: For better conversion rates. Ask your clients what they want. Engage conversations!</p>
        </div>

        <div className='overviewCardGraph'>
            <Doughnut
                data={{
                    // labels: ['pop', 'smoke'],
                    datasets: [{
                        // label: 'Points',
                        backgroundColor: ['#0244AE'],
                        data:[4000, 13400],
                        borderColor: ['#E7E7F7']
                    }]
                }}
            />
        </div>
        </div>
    )
}
export default OverviewCards;