import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;

  return (
    <div className="item" style={{ paddingBlock: "10px" }}>
      <img className="ui avatar image " src={user} alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`} state={props.contact}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <div className="ui basic right floated button" style={{ padding: "7px" }}>
        <Link to={`/edit/${id}`} state={props.contact}>
          <i
            className="edit alternate outline icon"
            style={{
              color: "blue",
              fontSize: "20px",
              margin: "0px",
              marginLeft: "7px",
            }}
          ></i>
        </Link>
        <Link to={`/delete/${id}`} state={props.contact}>
          <i
            className="trash alternate outline icon"
            style={{
              color: "red",
              fontSize: "20px",
              margin: "0px",
              marginLeft: "10px",
            }}
          ></i>
        </Link>
      </div>
    </div>
  );
}
