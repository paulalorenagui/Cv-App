import { useState } from "react";
import "../styles/ProfessionalExperience.css";

function ProfessionalExperience() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [beginningDate, setBeginningDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  function handleCompanyChange(e) {
    setCompany(e.target.value);
  }
  function handlePositionChange(e) {
    setPosition(e.target.value);
  }
  function handleResponsibilitiesChange(e) {
    setResponsibilities(e.target.value);
  }
  function handleBeginningDateChange(e) {
    setBeginningDate(e.target.value);
  }
  function handleEndingDateChange(e) {
    setEndingDate(e.target.value);
  }
  return (
    <div className="section">
      {isEditing ? (
        <>
          <div>
            <input
              type="text"
              placeholder="Comany Name"
              value={company}
              onChange={handleCompanyChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Position"
              value={position}
              onChange={handlePositionChange}
            />
          </div>
          <div>
            <textarea
              placeholder="Responsibilities"
              value={responsibilities}
              onChange={handleResponsibilitiesChange}
              rows={6}
              cols={20}
            />
          </div>
          <div>
            <input
              type="date"
              placeholder="Date from"
              min="1900-01-01"
              max="2099-12-31"
              value={beginningDate}
              onChange={handleBeginningDateChange}
            />
          </div>
          <div>
            <input
              type="date"
              placeholder="Date Until"
              min="1900-01-01"
              max="2099-12-31"
              value={endingDate}
              onChange={handleEndingDateChange}
            />
          </div>
          <div>
            <button onClick={() => setIsEditing(false)}>Save</button>
          </div>
        </>
      ) : (
        <>
          <p>Company Name: {company}</p>
          <p>Position: {position}</p>
          <p>Main Responsibilities: {responsibilities}</p>
          <p>Date From: {beginningDate}</p>
          <p>Date Until: {endingDate}</p>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </>
      )}
    </div>
  );
}
export default ProfessionalExperience;
