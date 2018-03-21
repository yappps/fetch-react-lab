import React from 'react';

function ProfilePicture(props){
    return (
        <img src={props.PictureObject.large} alt={props.PictureObject.large}/>
    )
}
export default ProfilePicture;