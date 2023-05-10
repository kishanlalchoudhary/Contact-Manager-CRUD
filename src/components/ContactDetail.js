import React from "react";
import user from "../images/user.jpg";
import { Link, useLocation } from "react-router-dom";

export default function ContactDetail(props) {
  const location = useLocation();

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{location.state.name}</div>
          <div className="description">{location.state.email}</div>
        </div>
      </div>
      <div className="ui center aligned container">
        <Link to="/">
          <button className="ui button blue">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
}
