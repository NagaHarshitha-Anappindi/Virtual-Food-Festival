import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [profilePic, setProfilePic] = useState("path/to/default-profile.jpg");
  const [editableFields, setEditableFields] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Load user details from localStorage
    } else {
      setMessage("No user logged in.");
    }
  }, []);

  const handleDeleteProfile = async () => {
    try {
      await axios.delete(`http://localhost:3000/users/${user.id}`);
      setUser(null);
      localStorage.removeItem("user"); // Clear user data
      setMessage("Profile deleted successfully.");
    } catch (error) {
      console.error("Error deleting profile:", error);
      setMessage(`Error deleting profile: ${error.message}`);
    }
  };

  const enableEdit = (field) => {
    setEditableFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const keys = id.split(".");
    setUser((prev) => {
      const updatedUser = { ...prev };
      let temp = updatedUser;
      for (let i = 0; i < keys.length - 1; i++) {
        temp = temp[keys[i]];
      }
      temp[keys[keys.length - 1]] = value;
      return updatedUser;
    });
  };

  const saveChanges = async () => {
    try {
      await axios.put(`http://localhost:3000/users/${user.id}`, user);
      setEditableFields({});
      localStorage.setItem("user", JSON.stringify(user)); // Update localStorage
      alert("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving changes:", error);
      setMessage("Error updating profile.");
    }
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

  const renderField = (field, value, parentKey = "") => {
    const fieldName = parentKey ? `${parentKey}.${field}` : field;
    if (typeof value === "object" && value !== null) {
      return (
        <div key={field} className="profile-section">
          <h4>{field.toUpperCase()}</h4>
          {Object.keys(value).map((subField) =>
            renderField(subField, value[subField], fieldName)
          )}
        </div>
      );
    } else {
      return (
        <div key={fieldName} className="profile-field">
          <label htmlFor={fieldName}>
            {field.replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type={field.includes("password") ? "password" : field.includes("dob") ? "date" : "text"}
            id={fieldName}
            value={value}
            onChange={handleChange}
            disabled={!editableFields[fieldName]}
          />
          <span className="edit-icon" onClick={() => enableEdit(fieldName)}>✏</span>
        </div>
      );
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {message && <p>{message}</p>}
      {user ? (
        <div>
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <input type="file" id="profilePicInput" hidden onChange={updateProfilePic} />
          <button className="upload-button" onClick={() => document.getElementById("profilePicInput").click()}>
            Upload
          </button>

          {Object.keys(user).map((field) => renderField(field, user[field]))}

          <button className="save-button" onClick={saveChanges}>Save Changes</button>
          <button className="delete-button" onClick={handleDeleteProfile}>Delete Profile</button>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Profile;
