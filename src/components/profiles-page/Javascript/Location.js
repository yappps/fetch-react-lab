import React from "react";

function Address(props) {
  return (
    <p id="location">
      <i className="material-icons ">location_on</i>
      &nbsp;&nbsp;&nbsp;&nbsp; 
      {props.addressObject.city.toUpperCase()}&nbsp;
      {props.addressObject.state.toUpperCase()}
    </p>
  );
}
export default Address;
