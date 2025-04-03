import { useState } from "react";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Credentials = ({ formData, handleChange, prevStep, handleSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Step 3: Credentials</h2>

      <label className="block mb-4">
        Username
        <input type="text" name="username" className="w-full p-2 border rounded mt-1" value={formData.username} onChange={handleChange} />
      </label>

      <label className="block mb-4">
        Password
        <div className="relative">
          <input type={showPassword ? "text" : "password"} name="password" className="w-full p-2 border rounded mt-1" value={formData.password} onChange={handleChange} />
          <span className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </label>

      <label className="block mb-4">
        Confirm Password
        <div className="relative">
          <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" className="w-full p-2 border rounded mt-1" value={formData.confirmPassword} onChange={handleChange} />
          <span className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </label>

      <div className="flex justify-between mt-4 space-x-4">
        <button className="bg-gray-500 text-white px-6 py-2 rounded w-1/2" onClick={prevStep}>Back</button>
        <button className="bg-green-500 text-white px-6 py-2 rounded w-1/2" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

Credentials.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Credentials;