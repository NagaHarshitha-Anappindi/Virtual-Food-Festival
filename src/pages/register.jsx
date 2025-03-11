import React, { useState } from "react";
import Personal from "../registration/personal";
import Address from "../registration/address";
import Credential from "../registration/credential";
import "./register.css";  // ✅ Correct for normal CSS

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    personal: { firstName: "", lastName: "", dob: "", phoneNumber: "" },
    address: { houseNo: "", street: "", landmark: "", city: "", state: "", zipCode: "", country: "" },
    credentials: { username: "", password: "", confirmPassword: "" },
  });

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

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/users", formData);
      alert("Registration Successful");
      navigate("/dashboard"); // Redirect to dashboard after successful registration
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Registration Failed!");
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
