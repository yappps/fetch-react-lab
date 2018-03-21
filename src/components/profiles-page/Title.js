import React from 'react';

function Title(props){
    return(
        <h2>{props.nameObject.last} {props.nameObject.first}</h2>
    )
}
export default Title