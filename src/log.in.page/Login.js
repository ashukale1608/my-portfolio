import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "https://v4-dev.simplifysandbox.net/auth/v1/api/user/login",
                {
                    username: username,
                    password: password
                }
            );

            console.log(response.data);

            if (response.data.message === "User Login Successful") {

                const token = response.data.response.access_token;

                // save token
                localStorage.setItem("token", token);

                navigate("/home");
            }

        } catch (error) {

            console.error(error);
            alert("Invalid Username or Password");

        }

    };

    return (
        <div className="login-container">

            <div className="login-box">

                <h2>Login</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Login</button>

                </form>

            </div>

        </div>
    );
}

export default Login;