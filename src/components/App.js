import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import api from "../api/contacts";
import EditContact from "./EditContact";

function App() {
  const [contacts, setContacts] = useState([]);

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      ...contact,
      id: uuid(),
    };

    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  return (
    <BrowserRouter>
      <div className="ui container-fluid">
        <Header />
        <Routes>
          <Route
            index
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="edit"
            element={
              <EditContact updateContactHandler={updateContactHandler} />
            }
          />
          <Route path="contact/:id" element={<ContactDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
