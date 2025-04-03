import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset previous errors

        try {
            const response = await axios.get("http://localhost:3000/users");
            console.log("API Response:", response.data); // Log the response

            if (!response.data || response.data.length === 0) {
                setError("No users found. Please register first.");
                return;
            }

            const users = response.data;

            // Check if username and password match
            const user = users.find(
                (u) =>
                    u.credentials?.username === formData.username &&
                    u.credentials?.password === formData.password
            );

            if (user) {
                alert("Login successful!");
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/ItemList");
            } else {
                setError("Invalid credentials. Please check your username and password.");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Error connecting to the server. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
