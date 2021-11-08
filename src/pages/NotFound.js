import React from 'react';
import {useLocation} from 'react-router-dom';

export default function NotFound  (){
        let location = useLocation();
        return (
            <div>

                <p style={{textAlign:"center"}}>NotFound {location.pathname}</p>
            </div>
        )
}
