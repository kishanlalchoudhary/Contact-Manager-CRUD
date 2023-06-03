import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function DeleteContact(props) {
  // Hooks
  const location = useLocation();
  const navigate = useNavigate();
  
  // handling yes button
  const remove = async () => {
    await props.removeContactHandler(location.state.id);
    navigate(-1);
  };

  // handling back button
  const backHandler = () => {
    navigate(-1);
  };

  return (
    <>
      {location.state ? (
        <div
          className="ui center aligned container"
          style={{ marginBlock: "30px" }}
        >
          <h3
            className="ui center aligned header"
            style={{ marginBlock: "20px" }}
          >
            Are you sure you want to Delete ?
          </h3>
          <button
            className="ui button red"
            style={{ marginInline: "10px" }}
            onClick={backHandler}
          >
            No
          </button>
          <button
            className="ui button blue"
            style={{ marginInline: "10px" }}
            onClick={remove}
          >
            Yes
          </button>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
