import React, { useState }from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
  const contacts = useSelector((state) => state.contact.contacts);
  const [selectAll,setSelectAll] = useState(false);
  return (
    <div>
      <div className="container py-3">
        <table className="table shadow">
          <thead className="bg-danger text-white">
            <tr>
              <th scope="col">
                <div className="custom-control custom-checkbox">
                  <input
                    id="selectAll" value={selectAll} onClick={()=>setSelectAll(!selectAll)}
                    type="checkbox"
                    className="custom-control-input"
                  ></input>
                  <label  htmlFor="selectAll" className="custom-control-label"></label>
                </div>
              </th>
              <th>Name</th>
              <th>PhoneNumber</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Contact contact={contact} key={contact.id} selectAll={selectAll}></Contact>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
