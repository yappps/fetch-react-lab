import React from 'react';

function Title(props){
    return(
        <h3 id="name">{props.nameObject.last.toUpperCase()} {props.nameObject.first.toUpperCase()}</h3>
    )
}
export default Title