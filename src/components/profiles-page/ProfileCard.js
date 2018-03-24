import React from "react";
import ProfilePicture from "./ProfilePicture";
import Title from "./Title";
import Address from "./Location";
import "../../index.css";
import PersonalDetails from './PersonalDetails';

function ProfileCard(props) {
//   console.log(props.individualData)
  return (
    <div className="Individual-Profile-Card">
      <div className="PictureIcon-Title-Location">
        <ProfilePicture PictureObject={props.individualData.picture} />
        <Title nameObject={props.individualData.name} />
        <div className="Address">
          <Address addressObject={props.individualData.location} />
        </div>
      </div>
      
      <PersonalDetails details={props.individualData} />
    </div>
  );
}
export default ProfileCard;
