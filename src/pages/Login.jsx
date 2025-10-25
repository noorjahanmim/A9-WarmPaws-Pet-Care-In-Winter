import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};:'"\\|,.<>/?]).{8,}$/;
    if (!regExp.test(password)) {
      toast.error('Password must be at least 8 characters, contain uppercase, number & special character.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        toast.success('Login successfully!');
        navigate(from, { replace: true });
      })
      .catch(error => toast.error(error.message));
  };

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then(res => {
        setUser(res.user);
        toast.success("Google login successful");
        navigate(from, { replace: true });
      })
      .catch(err => toast.error(err.message));
  };

  const handleResetPassword = (email) => {
    if (!email) return toast.error("Please enter your email first");
    sendPasswordResetEmail(auth, email)
      .then(() => toast.success("Password reset email sent!"))
      .catch(err => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex justify-center bg-blue-50 px-4 pt-24 sm:pt-32">
      <div className="w-full max-w-md">
        <h1 className='text-center font-bold text-3xl mb-5'>Login now!</h1>
        <div className="card bg-white w-full shadow-2xl rounded-2xl">
          <div className="card-body p-6 sm:p-8">
            {user ? 'User already logged in' : (
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="label">Email</label>
                  <input type="email" name='email' placeholder="Email"
                    className="input border bg-blue-100 text-black w-full" required />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1 relative">
                  <label className="label">Password</label>
                  <input type={show ? 'text' : 'password'} name='password' placeholder="Password"
                    className="input bg-blue-100 text-black w-full pr-12" required />
                  <span onClick={() => setShow(!show)}
                    className='absolute right-3 top-10 cursor-pointer text-gray-700'>
                    {show ? <RxEyeOpen size={20} /> : <GoEyeClosed size={20} />}
                  </span>
                </div>

                {/* Forgot Password */}
                <div className="text-right">
                  <button type="button"
                    onClick={() => handleResetPassword(document.querySelector('input[name="email"]').value)}
                    className="text-blue-500 text-sm hover:underline">
                    Forgot password?
                  </button>
                </div>

                {/* Login Button */}
                <button type="submit" className="btn btn-neutral mt-4 border-none bg-blue-400 w-full">
                  Login
                </button>

                {/* Google Signin */}
                <button type="button" onClick={handleGoogleSignin}
                  className="mt-5 flex items-center justify-center gap-3 bg-blue-50 text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google" className="w-5 h-5" />
                  Continue with Google
                </button>

                <p className="text-center mt-2">Don't have an account? <Link to='/signup' className='text-blue-500 underline'>Signup</Link></p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
