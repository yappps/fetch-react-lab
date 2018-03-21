import React from "react";

function Address(props) {
  return (
    <ul>
      <ol>street: {props.addressObject.street}</ol>
      <ol>city: {props.addressObject.city}</ol>
      <ol>state: {props.addressObject.state}</ol>
      <ol>postcode: {props.addressObject.postcode}</ol>
    </ul>
  );
}
export default Address;
