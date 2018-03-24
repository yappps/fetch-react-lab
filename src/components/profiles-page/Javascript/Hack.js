import React from 'react';

function Hack(props){
    return(
        <div>
            <p>{props.hack.username}</p>
            <p>{props.hack.password}</p>
        </div>
    )
}
export default Hack;