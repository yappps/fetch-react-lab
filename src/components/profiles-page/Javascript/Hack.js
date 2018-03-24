import React from 'react';

function Hack(props){
    return(
        <div>
            {/* <i class="material-icons-Lock">lock</i> */}
            <p><i class="material-icons">account_box</i>&nbsp;<span className="details-hack-underline"> {props.hack.username}</span></p>
            <p><i class="material-icons">lock_open</i>&nbsp;<span className="details-hack-underline"> {props.hack.password}</span></p>
        </div>
    )
}
export default Hack;