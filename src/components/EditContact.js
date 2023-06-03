import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function EditContact(props) {
  const location = useLocation();
  const [name, setName] = useState(location.state?.name);
  const [email, setEmail] = useState(location.state?.email);
  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    props.updateContactHandler({
      id: location.state.id,
      name: name,
      email: email,
    });
    setName("");
    setEmail("");
    navigate("/");
  };

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <>
      {location.state ? (
        <div className="ui main container">
          <h2>Edit Contact</h2>
          <form className="ui form" onSubmit={update}>
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="ui button blue right floated">Update</button>
          </form>
          <button className="ui button blue" onClick={backHandler}>
            Back
          </button>
        </div>
      ) : (
        <Navigate to="/"/>
      )}
    </>
  );
}