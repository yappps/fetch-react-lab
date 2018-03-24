import React from "react";

function PersonalDetails(props) {
  return (
    <div>
      <p><i class="material-icons">cake</i>&nbsp;&nbsp;{props.details.dob}</p>
      <p><i class="material-icons">contact_phone</i>&nbsp;&nbsp;{props.details.phone}</p>
      <p><i class="material-icons">email</i>&nbsp;&nbsp;{props.details.email}</p>
    </div>
  );
}
export default PersonalDetails;
