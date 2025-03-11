import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/login", formData);

            if (response.data.success) {
                alert("Login successful!");
                window.location.href = "/dashboard";  // Redirect to dashboard
            } else {
                setError("Invalid credentials. Please check your username and password.");
            }
        } catch (err) {
            setError("Invalid credentials. Please check your username and password.");
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
