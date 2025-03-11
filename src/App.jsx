import React, { useState } from "react";
import "./App.css";

const Profile = () => {
  const [profilePic, setProfilePic] = useState("path/to/profile-pic.jpg");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    dob: "",
    address: "",
    userType: "Vendor",
    phoneNumber: "",
  });
  const [editableFields, setEditableFields] = useState({});

  const enableEdit = (field) => {
    setEditableFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const saveChanges = () => {
    setEditableFields({});
    alert("Changes saved successfully!");
  };

  const updateProfilePic = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePic(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <input type="file" id="profilePicInput" hidden onChange={updateProfilePic} />
      <button className="upload-button" onClick={() => document.getElementById("profilePicInput").click()}>
        Upload
      </button>

      {Object.keys(formData).map((field) => (
        <div className="profile-field" key={field}>
          <label htmlFor={field}>{field.replace(/([A-Z])/g, " $1").trim()}:</label>
          <input
            type={field === "password" ? "password" : field === "dob" ? "date" : "text"}
            id={field}
            value={formData[field]}
            onChange={handleChange}
            disabled={!editableFields[field]}
          />
          <span className="edit-icon" onClick={() => enableEdit(field)}>✏</span>
        </div>
      ))}

      <button className="save-button" onClick={saveChanges}>Save Changes</button>
    </div>
  );
};

export default Profile;