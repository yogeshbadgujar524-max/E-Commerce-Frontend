import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        secretkey: "",
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        // Admin Login (Frontend Only)
        if (loginData.role === "admin") {

            if (
                loginData.email === "admin@gmail.com" &&
                loginData.password === "admin123" &&
                loginData.secretKey === "ADMIN@123"
            ) {

                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        email: "admin@gmail.com",
                        role: "admin",
                    })
                );

                alert("Admin Login Successful");
                navigate("/admin");
                return;
            }

            alert("Invalid Admin Credentials");
            return;
        }

        // Normal User Login
        try {
            const res = await axios.post(
                "https://e-commerce-backend-chi-three.vercel.app/api/login",
                {
                    email: loginData.email,
                    password: loginData.password,
                }
            );

            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );

            alert(res.data.message);
            console.log(res.data);
            navigate("/profile");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Login Failed"
            );

        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-900">
            <form
                onSubmit={handleLogin}
                className="bg-gray-800 p-8 rounded-lg w-[400px]"
            >
                <h2 className="text-white text-3xl mb-5 text-center">
                    Login
                </h2>

                <div className="flex justify-center gap-6 mb-4 text-white">

                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="role"
                            value="user"
                            checked={loginData.role === "user"}
                            onChange={handleChange}
                        />
                        User
                    </label>

                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="role"
                            value="admin"
                            checked={loginData.role === "admin"}
                            onChange={handleChange}
                        />
                        Admin
                    </label>

                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={handleChange}
                    className="w-full p-3 mb-3 rounded"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleChange}
                    className="w-full p-3 mb-5 rounded"
                />

                {loginData.role === "admin" && (
                    <input
                        type="password"
                        name="secretKey"
                        placeholder="Admin Secret Key"
                        value={loginData.secretKey}
                        onChange={handleChange}
                        className="w-full p-3 mb-5 rounded"
                    />
                )}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded"
                >
                    Login
                </button>
                <div className="text-yellow-400 mt-3">Don't have an account ? <a className="text-red-500" href="/register">Register Now</a></div>
            </form>
        </div>
    );
};

export default Login;