import React from 'react';
import ProfilePicture from './ProfilePicture';
import Title from './Title';
import Address from './Location';
import Contact from './Contact';
import "../../index.css"

function ProfileCard(props){
    console.log(props.individualData)
    return(
        <div class="individualContainer">
            <ProfilePicture PictureObject={props.individualData.picture}/>
            <Title nameObject={props.individualData.name}/>
            <Contact contact={props.individualData}/>
            <Address addressObject={props.individualData.location} />
        </div>
    )
}
export default ProfileCard