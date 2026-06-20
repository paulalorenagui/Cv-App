import { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleTelChange(e) {
    setTel(e.target.value);
  }
  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  return (
    <div className="section">
      <h2>General Information</h2>
      {isEditing ? (
        <>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Telephone"
              value={tel}
              onChange={handleTelChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <button onClick={() => setIsEditing(false)}>Save</button>
          </div>
        </>
      ) : (
        <>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Telephone: {tel}</p>
          <p>Address: {address}</p>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </>
      )}
    </div>
  );
}
export default GeneralInfo;
