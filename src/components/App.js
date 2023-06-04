import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

// Importing api file
import api from "../api/contacts";

// Components
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";

function App() {
  // states
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Get contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  // Add contact
  const addContactHandler = async (contact) => {
    try {
      const request = {
        id: uuid(),
        ...contact,
      };

      const response = await api.post("/contacts", request);
      setContacts([...contacts, response.data]);
      alert("Contact added successfully");
    } catch (err) {
      alert(err);
    }
  };

  // Delete contact
  const removeContactHandler = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });
      setContacts(newContactList);
      alert("Contact deleted successfully");
    } catch (err) {
      alert(err);
    }
  };

  // Update Contact
  const updateContactHandler = async (contact) => {
    try {
      const response = await api.put(`/contacts/${contact.id}`, contact);
      const { id, name, email } = response.data;
      setContacts(
        contacts.map((contact) => {
          return contact.id === id ? { ...response.data } : contact;
        })
      );
      alert("Contact Updated Successfully");
    } catch (err) {
      alert(err);
    }
  };

  // Search Contacts
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  // Get Contacts when website is reloaded
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
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="edit/:id"
            element={
              <EditContact updateContactHandler={updateContactHandler} />
            }
          />
          <Route
            path="delete/:id"
            element={
              <DeleteContact removeContactHandler={removeContactHandler} />
            }
          />
          <Route path="contact/:id" element={<ContactDetail />} />
          <Route
            path="*"
            element={
              <h3 className="ui center aligned header">404 Page Not Found</h3>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
