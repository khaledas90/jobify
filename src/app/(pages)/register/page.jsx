"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/app/utils/firebase";
import { useRouter } from "next/navigation";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    remember: z.boolean().optional(),
});

const Register = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            const userId = userCredential.user.uid;
            if (window !== undefined) {
                localStorage.setItem("user", userId);
            }

            await setDoc(doc(db, "users", userId), {
                name: data.name,
                email: data.email,
                phone: "",
                uid: userId,
                password: data.password,
                address: "",
                createdAt: serverTimestamp(),
            });

            console.log("Registration successful:", userCredential.user);
            toast.success("Registration successful");
            router.push("/");
        } catch (error) {
            console.error("Registration error:", error);
            if (error.code === "auth/email-already-in-use") {
                toast.error("This email is already in use. Please try logging in.");
            } else if (error.code === "auth/invalid-email") {
                toast.error("Invalid email format. Please enter a valid email.");
            } else {
                toast.error("An error occurred during registration. Please try again.");
            }
        }
    };

    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            <h1 className="text-4xl text-center my-3 font-semibold">Register</h1>
            <p className="text-slate-500 text-center text-lg">
                Hi, Welcome to your website 👋
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="my-10">
                <div className="flex flex-col space-y-5">
                    {/* Name */}
                    <label htmlFor="name">
                        <p className="font-medium text-slate-700 pb-2">Name</p>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            {...register("name")}
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                            placeholder="Enter your name"
                        />
                        {errors.name && (
                            <span className="text-red-500">{errors.name.message}</span>
                        )}
                    </label>

                    {/* Email */}
                    <label htmlFor="email">
                        <p className="font-medium text-slate-700 pb-2">Email address</p>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            {...register("email")}
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                            placeholder="Enter email address"
                        />
                        {errors.email && (
                            <span className="text-red-500">{errors.email.message}</span>
                        )}
                    </label>

                    {/* Password */}
                    <label htmlFor="password">
                        <p className="font-medium text-slate-700 pb-2">Password</p>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            {...register("password")}
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                            placeholder="Enter your password"
                        />
                        {errors.password && (
                            <span className="text-red-500">{errors.password.message}</span>
                        )}
                    </label>

                    {/* Remember Me */}
                    <div className="flex items-center">
                        <label htmlFor="remember" className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                {...register("remember")}
                                className="w-4 h-4 border-slate-200 focus:bg-indigo-600"
                            />
                            <span className="ml-2">Remember me</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            />
                        </svg>
                        <span>Register</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
