import React from "react";

function PersonalDetails(props) {
  return (
    <div>
      <p>
        <i class="material-icons">cake</i>&nbsp;&nbsp;<span className="details-hack-underline">
          {props.details.dob}
        </span>
      </p>
      <p>
        <i class="material-icons">contact_phone</i>&nbsp;&nbsp;<span className="details-hack-underline">
          {props.details.phone}
        </span>
      </p>
      <p>
        <i class="material-icons">email</i>&nbsp;&nbsp;<span className="details-hack-underline">
          {props.details.email}
        </span>
      </p>
    </div>
  );
}
export default PersonalDetails;
