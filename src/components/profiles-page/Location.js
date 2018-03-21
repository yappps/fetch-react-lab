import React from "react";

function Address(props) {
  return (
    <p id="location">
      {props.addressObject.city.toUpperCase()}, {props.addressObject.state.toUpperCase()}  
    </p>
  );
}
export default Address;
