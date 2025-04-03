import React from "react";
import PropTypes from "prop-types";

const Address = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Step 2: Address Details</h2>

      {/* House/Flat No. */}
      <label className="block mb-4">
        House/Flat No.
        <input 
          type="text" 
          name="houseNo" 
          className="w-full p-2 border rounded mt-1" 
          value={formData.houseNo || ""} 
          onChange={handleChange} 
          required
        />
      </label>

      {/* Street */}
      <label className="block mb-4">
        Street
        <input 
          type="text" 
          name="street" 
          className="w-full p-2 border rounded mt-1" 
          value={formData.street || ""} 
          onChange={handleChange} 
          required
        />
      </label>

      {/* Landmark */}
      <label className="block mb-4">
        Landmark
        <input 
          type="text" 
          name="landmark" 
          className="w-full p-2 border rounded mt-1" 
          value={formData.landmark || ""} 
          onChange={handleChange} 
        />
      </label>

      {/* City */}
      <label className="block mb-4">
        City
        <input 
          type="text" 
          name="city" 
          className="w-full p-2 border rounded mt-1" 
          value={formData.city || ""} 
          onChange={handleChange} 
          required
        />
      </label>

      {/* State */}
      <label className="block mb-4">
        State
        <input 
          type="text" 
          name="state" 
          className="w-full p-2 border rounded mt-1" 
          value={formData.state || ""} 
          onChange={handleChange} 
          required
        />
      </label>

      {/* Zip Code */}
      <label className="block mb-4">
        Zip Code
        <input 
          type="text" 
          name="zipCode" 
          className="w-full p-2 border rounded mt-1" 
          value={formData.zipCode || ""} 
          onChange={handleChange} 
          required
        />
      </label>

      {/* Country */}
      <label className="block mb-4">
        Country
        <input 
          type="text" 
          name="country" 
          className="w-full p-2 border rounded mt-1" 
          value={formData.country || ""} 
          onChange={handleChange} 
          required
        />
      </label>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4 space-x-4">
        <button 
          className="bg-gray-500 text-white px-6 py-2 rounded w-1/2" 
          onClick={prevStep}
        >
          Back
        </button>
        <button 
          className="bg-blue-500 text-white px-6 py-2 rounded w-1/2" 
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// ✅ Prop Validation
Address.propTypes = {
  formData: PropTypes.shape({
    houseNo: PropTypes.string,
    street: PropTypes.string,
    landmark: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipCode: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default Address;
