import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { ...contact, id: uuid() }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) {
      setContacts(retrieveContacts);
      console.log("success");
    }
    console.log("failure");
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

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
          <Route path="contact/:id" element={<ContactDetail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
