import PropTypes from "prop-types"; // Import PropTypes

const PersonalDetails = ({ formData, handleChange, nextStep }) => {
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
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />

          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

<div className="flex justify-between mt-4 space-x-4">
        
        <button className="bg-blue-500 text-white px-6 py-2 rounded w-1/2" onClick={nextStep}>Next</button>
      </div>
        </form>
        
      </div>
    </div>
  );
};

// Define prop types
PersonalDetails.propTypes = {
  formData: PropTypes.object.isRequired, // Ensures formData is passed
  handleChange: PropTypes.func.isRequired, // Ensures handleChange is a function
  nextStep: PropTypes.func.isRequired, // Ensures nextStep is a function
};

export default PersonalDetails;
