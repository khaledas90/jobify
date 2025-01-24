"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { z } from 'zod';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/utils/firebase";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const router = useRouter();


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;
            console.log("Login successful:", user);
            console.log(user.uid);
            if (window !== undefined) {
                localStorage.setItem("user", user.uid);
            }
            toast.success("Login successful");
            router.push("/");
            return user;
        } catch (error) {
            console.error("Error logging in:", error);
            if (error.code === 'auth/user-not-found') {
                toast.error('User not found. Please register first.');
            } else if (error.code === 'auth/wrong-password') {
                toast.error('Incorrect password. Please try again.');
            } else if (error.code === 'auth/invalid-email') {
                toast.error('Invalid email format. Please enter a valid email.');
            } else {
                toast.error('An error occurred. Please try again later.');
            }
            throw new Error(error.message);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            <h1 className="text-4xl text-center my-3 font-semibold">Login</h1>
            <p className="text-slate-500 text-center text-lg">Hi, Welcome back 👋</p>


            <form className="my-10" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-5">
                    <label htmlFor="email">
                        <p className="font-medium text-slate-700 pb-2">Email address</p>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={`w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="Enter email address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </label>
                    <label htmlFor="password">
                        <p className="font-medium text-slate-700 pb-2">Password</p>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className={`w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow ${errors.password ? 'border-red-500' : ''}`}
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </label>
                    <div className="flex flex-row justify-between my-3">
                        <div>
                            <label htmlFor="remember" className="flex items-center">
                                <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600" />
                                <span className="ml-2"> Remember me</span>
                            </label>
                        </div>
                        <Link href="/forgetPassword" className="font-medium text-indigo-600">Forgot Password?</Link>
                    </div>
                    <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <span>Login</span>
                    </button>
                    <p className="text-center">
                        Not registered yet?{' '}
                        <span className="text-indigo-600 font-medium inline-flex space-x-1 items-center">
                            <Link href="/register">Register now </Link>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
