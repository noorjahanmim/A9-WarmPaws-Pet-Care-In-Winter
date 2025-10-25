import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
// import toast, { Toaster } from "react-hot-toast";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
// import { toast } from 'react-hot-toast';
import { toast, Toaster } from 'react-hot-toast';



const Signup = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photoURL = event.target.photoURL.value || "https://i.ibb.co/4pDNDk1/avatar.png";

    // ✅ Password validation
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordReg.test(password)) {
      toast.error("Password must be at least 6 characters, include uppercase and lowercase letters.");
      return;
    }

    // ✅ Create user
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        updateProfile(user, { displayName: name, photoURL: photoURL })
          .then(() => {
            toast.success("Signup successful!");
            navigate("/"); 
          })
          .catch(err => console.log(err));
      })
      .catch(error => {
        toast.error(error.message);
        console.log(error);
      });
  };

  // ✅ Google Sign-in
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result)
        toast.success("Logged in with Google!");
        navigate("/"); // Home page এ redirect
      })
      .catch(error => {
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <Toaster position="top-center" />
      <h1 className="text-3xl font-bold text-center mb-6">Signup Now!</h1>
      <form onSubmit={handleSignup} className="space-y-4">
        <input type="text" name="name" placeholder="Name" className="input w-full border px-3 py-2 bg-blue-100" required />
        <input type="email" name="email" placeholder="Email" className="input bg-blue-100 w-full border px-3 py-2" required />
        <input type="text" name="photoURL" placeholder="Photo URL" className="input bg-blue-100 w-full border px-3 py-2" />
        <div className="relative">
          <input type={show ? "text" : "password"} name="password" placeholder="Password" className="input bg-blue-100 w-full border px-3 py-2" required />
          <span onClick={() => setShow(!show)} className="absolute right-3 top-3 cursor-pointer text-xl">
            {show ? <RxEyeOpen /> : <GoEyeClosed />}
          </span>
        </div>
        <button type="submit" className="btn w-full bg-blue-400 border-none text-white">Register</button>
      </form>

      <p className="text-center mt-4">
        Already have an account? <Link to="/login" className="text-blue-500 underline">Login</Link>
      </p>

      <div className="divider">OR</div>
      <button
                type="button"
                onClick={handleGoogleSignIn}
                className="mt-5  flex items-center justify-center gap-3 bg-blue-50 text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
    </div>
  );
};

export default Signup;
