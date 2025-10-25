import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-5 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-semibold text-center mb-5">Reset Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full mb-4 bg-blue-100 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-neutral w-full bg-blue-400 border-none">
          Reset
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
