import { useState } from "react";
import "../styles/Education.css";

function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  function handleschoolNameChange(e) {
    setSchoolName(e.target.value);
  }
  function handletitleOfStudyChange(e) {
    setTitleOfStudy(e.target.value);
  }
  function handledateOfStudyChange(e) {
    setDateOfStudy(e.target.value);
  }
  return (
    <div className="section">
      <h2>Education</h2>
      {isEditing ? (
        <>
          <div>
            <input
              type="text"
              placeholder="School Name"
              value={schoolName}
              onChange={handleschoolNameChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Title Of Study"
              value={titleOfStudy}
              onChange={handletitleOfStudyChange}
            />
          </div>
          <div>
            <input
              type="date"
              placeholder="Date Of Study"
              min="1900-01-01"
              max="2099-12-31"
              value={dateOfStudy}
              onChange={handledateOfStudyChange}
            />
          </div>
          <div>
            <button onClick={() => setIsEditing(false)}>Save</button>
          </div>
        </>
      ) : (
        <>
          <p>School Name: {schoolName}</p>
          <p>Title Of Study {titleOfStudy}</p>
          <p>Date Of Study {dateOfStudy}</p>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </>
      )}
    </div>
  );
}
export default Education;
