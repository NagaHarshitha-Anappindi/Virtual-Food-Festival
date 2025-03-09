import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Personal from "../registration/personal";
import Address from "../registration/address";
import Credential from "../registration/credential";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    try {
      console.log("Submitting Data:", formData);
      await axios.post("http://localhost:3000/users", formData);
      alert("Registration Successful");
      navigate("/login"); // Redirecting to login page
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Registration Failed!");
    }
  };

  return (
    <div className="container">
      <div className="card">
        {step === 1 && (
          <Personal formData={formData} handleChange={handleChange} nextStep={nextStep} />
        )}
        {step === 2 && (
          <Address formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 3 && (
          <Credential formData={formData} handleChange={handleChange} prevStep={prevStep} handleSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default Register;
