import Link from 'next/link';
import React from 'react';

const Register = () => {
    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            <h1 className="text-4xl  text-center my-3 font-semibold">Forget Password</h1>
            <p className="text-slate-500 text-center text-lg">Hi, Enter your email to reset your password</p>
            <form className="my-10">
                <div className="flex flex-col space-y-5">
                    <label htmlFor="email">
                        <p className="font-medium text-slate-700 pb-2">Email address</p>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                            placeholder="Enter email address"
                        />
                    </label>


                    <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <span>reset password</span>
                    </button>

                </div>
            </form>
        </div>
    );
};

export default Register;
