import React, { useState } from "react";
import Personal from "../registration/personal";
import Address from "../registration/address";
import Credential from "../registration/credential";
import "./register.css"; // ✅ Ensure correct import for styles

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Form Data State
  const [formData, setFormData] = useState({
    personal: { firstName: "", lastName: "", dob: "", phoneNumber: "" },
    address: { houseNo: "", street: "", landmark: "", city: "", state: "", zipCode: "", country: "" },
    credentials: { username: "", password: "", confirmPassword: "" },
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [step === 1 ? "personal" : step === 2 ? "address" : "credentials"]: {
        ...prev[step === 1 ? "personal" : step === 2 ? "address" : "credentials"],
        [name]: value,
      },
    }));
  };

  // Next & Previous Step Functions
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Handle Form Submission
  const handleSubmit = async () => {
    // ✅ Validate passwords
    if (formData.credentials.password !== formData.credentials.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // ✅ Log formData for debugging
    console.log("Submitting Data:", formData);

    try {
      const response = await axios.post("http://localhost:3000/users", formData);

      alert("Registration Successful");
      console.log("Response:", response.data);
      navigate("/dashboard"); // Redirect after success
    } catch (error) {
      console.error("Error submitting form", error.response?.data || error.message);
      alert(`Registration Failed! ${error.response?.data?.message || "Unknown error"}`);
    }
  };

  return (
    <div className="container">
      {step === 1 && <Personal formData={formData.personal} handleChange={handleChange} nextStep={nextStep} />}
      {step === 2 && <Address formData={formData.address} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Credential formData={formData.credentials} handleChange={handleChange} prevStep={prevStep} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default Register;
