import React from "react";

function Contact(props) {
  return (
    <div>
      <p>{props.contact.phone}</p>
      <p>{props.contact.email}</p>
    </div>
  );
}
export default Contact;
