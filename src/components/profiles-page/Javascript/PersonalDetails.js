import React from "react";

function PersonalDetails(props) {
  return (
    <div>
      <p>{props.details.dob}</p>
      <p>{props.details.phone}</p>
      <p>{props.details.email}</p>
    </div>
  );
}
export default PersonalDetails;
