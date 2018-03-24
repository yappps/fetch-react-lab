import React from "react";

function Address(props) {
  return (
    <p id="location">
      <i class="material-icons ">location_on</i>
      &nbsp;&nbsp;&nbsp;&nbsp;
      {props.addressObject.city.toUpperCase()},{" "}
      {props.addressObject.state.toUpperCase()}
    </p>
  );
}
export default Address;
