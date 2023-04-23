import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => (
    <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
  ));
  return <div className="ui celled list container">{renderContactList}</div>;
}
