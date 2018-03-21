import React from "react";
import ProfilePicture from "./ProfilePicture";
import Title from "./Title";
import Address from "./Location";
import Contact from "./Contact";
import "../../index.css";

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
      <Contact contact={props.individualData} />
    </div>
  );
}
export default ProfileCard;
