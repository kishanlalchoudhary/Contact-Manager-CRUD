import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

export default function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => (
    <ContactCard
      contact={contact}
      clickHandler={deleteContactHandler}
      key={contact.id}
    />
  ));

  return (
    <div className="ui main container">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui blue button right floated">Add Contact</button>
        </Link>
      </h2>
      <div>
        <div className="ui icon input" style={{width: "100%"}}>
          <input type="text" value={props.term} placeholder="Search Contacts" className="prompt" onChange={(e) => props.searchKeyword(e.target.value)}/>
          <i className="search icon" />
        </div>
      </div>
      <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No Contacts available"}</div>
    </div>
  );
}
