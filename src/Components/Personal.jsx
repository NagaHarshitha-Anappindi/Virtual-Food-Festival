import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const PersonalDetails = ({ nextStep }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    nextStep(); // Move to the next step
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Personal Details</h2>
        <form onSubmit={handleNext}>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

          <button type="submit" className="next-button">Next</button>
        </form>
      </div>
    </div>
  );
};

// Define prop types
PersonalDetails.propTypes = {
  nextStep: PropTypes.func.isRequired, // Ensures nextStep is a function and required
};

export default PersonalDetails;