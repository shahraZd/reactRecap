import React from "react";

const Card = props => {
  const style = {
    backgroundColor: "lightBlue",
    width: "250px",
    margin: "5px"
  };

  if (props.elt.isFamily) {
    style.backgroundColor = "pink";
  }
  return (
    <div className="card" style={style}>
      <img src={props.elt.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.elt.name}</h5>
        <p className="card-text">{props.elt.email}</p>
        <p className="card-text">{props.elt.isFamily ? "Family" : "Friend"}</p>

        <a href="/" className="btn btn-primary">
          Contacter
        </a>
      </div>
    </div>
  );
};
export default Card;
