import React from 'react';

function Hack(props){
    return(
        <div>
            {/* <i class="material-icons-Lock">lock</i> */}
            <p>{props.hack.username}</p>
            <p>{props.hack.password}</p>
        </div>
    )
}
export default Hack;