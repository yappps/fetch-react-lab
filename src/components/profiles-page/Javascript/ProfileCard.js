import React from "react";
import ProfilePicture from "./ProfilePicture";
import Title from "./Title";
import Address from "./Location";
import PersonalDetails from "./PersonalDetails";
import Hack from "./Hack";
import "../../../index.css";
import "../CSS/ProfileCard.css";

function ProfileCard(props) {
  //   console.log(props.individualData)
  return (
    <div className="Individual-ProfileCard">
      <div className="PictureIcon-Title-Location">
        <ProfilePicture PictureObject={props.individualData.picture} />
        <Title nameObject={props.individualData.name} />

        <div className="Address">
          <Address addressObject={props.individualData.location} />
        </div>
  
      </div>

      <div className="details-hack">
        <PersonalDetails details={props.individualData} />
        <Hack hack={props.individualData.login} />
      </div>
    </div>
  );
}
export default ProfileCard;
