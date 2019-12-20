import React from "react";
import Card from "./Card";

const contactList = props => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {props.contacts.map(e => (
        <Card key={e.id} elt={e} />
      ))}
    </div>
  );
};

export default contactList;
