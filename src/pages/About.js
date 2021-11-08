import React from 'react';
import {useHistory} from 'react-router-dom';
import svg from '../../public/logo512.png'

export default function About  (){
    let history = useHistory();

        return (
            <div>
                <img alt='img'  style={{marginLeft:'200PX',cursor:'pointer'}} height='200' src={svg} />
                <h1 style={{textAlign:"center"}}>about <button onClick={(e)=>history.push('/')}>Go to home</button></h1>
            </div>
        )
}
