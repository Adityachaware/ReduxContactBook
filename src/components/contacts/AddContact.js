import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../action/ContactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddContact = () => {
    let history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const NameFunction = (e) => {
    setName(e.target.value);
  };

  const EmailFunction = (e) => {
    setEmail(e.target.value);
  };

  const PhoneFunction = (e) => {
    setPhone(e.target.value);
  };

  const createContact = (e) => {
    
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name: name,
      email: email,
      phone: phone,
    };
    dispatch(addContact(new_contact));
    history.push("/");
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div class="card-body">
        <form onSubmit={createContact}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control"
              value={name}
              onChange={NameFunction}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Your PhoneNumber"
              className="form-control"
              value={phone}
              onChange={PhoneFunction}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="form-control"
              value={email}
              onChange={EmailFunction}
            ></input>
          </div>
          <button type="submit" className="add-contact">
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
