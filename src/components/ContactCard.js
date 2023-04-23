import React from "react";
import user from "../images/user.png";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item" style={{ paddingBlock: "10px" }}>
      <img className="ui avatar image " src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <div className="ui basic right floated button" style={{ padding: "7px" }}>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", fontSize: "20px", margin: "0px" }}
          onClick={() => {
            props.clickHandler(id);
          }}
        ></i>
      </div>
    </div>
  );
}
