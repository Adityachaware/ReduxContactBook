import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addContact,
  getContact,
  updateContact,
} from "../../action/ContactAction";
import shortid from "shortid";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
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

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact = (event) => {
    event.preventDefault();

    const update_contact = Object.assign(contact, {
      name: name,
      phone: phone,
      email: email,
    });
    dispatch(updateContact(update_contact));
    console.log({update_contact});
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div class="card-body">
        <form onSubmit={(e)=>onUpdateContact(e)}>
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
          <button type="submit" className="add-contact bg-danger text-white">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
