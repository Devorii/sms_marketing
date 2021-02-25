import React, {useEffect, useState} from 'react'
import Cookies from "js-cookie";
import {useParams} from 'react-router-dom'

const Iframe = (props) => {
    const {hash} = useParams()
    const [storeUrl, setStoreUrl] = useState({
        url: '',
        loaded: false
    })

    useEffect((props) => {
        console.log(hash)

        fetch(`http://devorii.pythonanywhere.com/link-to/${hash}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Access-Control-Allow-Origin": "*",
				"x-access-token": Cookies.get("token"),
            }

        }).then((response) => response.json())
        .then((resp)=>{
            setStoreUrl({
                url: resp.url,
                loaded: true
            })
            console.log(resp.url)
        })
    }, [])

if (storeUrl.loaded === false){
    return <h1>Loading...</h1>
}
else{

    return (
        <iframe  className='siteView' src={storeUrl.url}>

        </iframe>
    )
}

}
export default Iframe;
