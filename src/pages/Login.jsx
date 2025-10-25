import { sendPasswordResetEmail } from "firebase/auth";
import { toast, Toaster } from 'react-hot-toast';

import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../firebase/firebase.config';
// import toast from 'react-hot-toast';
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import { useNavigate, useLocation } from 'react-router-dom';




const googleProvider = new GoogleAuthProvider();


const Login = () => {


  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);


  // const [user,  setUser] = useState(null);

  const [show, setShow] = useState(false);

  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  // navigate(from, { replace: true });



  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    // if (password.length < 6) {
    //   toast.error('Password should be at least 6 digit');
    //   return;
    // }

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};:'"\\|,.<>/?]).{8,}$/;

    if (!regExp.test(password)) {

      toast.error('Password must be at least 8 characters long. Password must contain at least one uppercase letter. Password must contain at least one number. Password must contain at least one special character.');
      return;

    }



    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        console.log(result)
        toast.success('Login successfully!');
        navigate(from, { replace: true });
      })
      .catch(error => {
        toast.error(error.message);
        console.log(error)
      })

  };

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("Google login successful");
        navigate(from, { replace: true });
      })
      .catch((event) => {
        console.log(event);
        toast.error(event.message);
      });
  };

  // 🔹 Mark this function for Forget Password
  const handleResetPassword = (email) => {
    if (!email) return toast.error("Please enter your email first");
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
        window.location.href = "https://mail.google.com"; // Optional redirect
      })
      .catch((err) => toast.error(err.message));
  };


  return (
    <div className="max-w-md mx-auto mb-20">
      <h1 className='text-center font-bold text-3xl mb-5'>Login now!</h1>
      <div className="card bg-white w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          {user ? 'user ache' : (<form onSubmit={handleLogin} className=''>
            <fieldset className="fieldset">

              <label className="label ">Email</label>
              <input type="email" className="input border bg-blue-100 text-black " name='email' placeholder="Email" />
              <div className='relative'>
                <label className="label">Password</label>
                <input type={show ? 'text' : "password"} name='password' className="input bg-blue-100 text-black" placeholder="Password" />

                <span onClick={() => setShow(!show)} className='absolute right-7 top-8 cursor-pointer z-50'>
                  {show ? <RxEyeOpen /> : <GoEyeClosed />}
                </span>
              </div>
              <div> <Link to="/forgot-password" className="link link-hover">
                Forgot password?
                <span
                  onClick={() => handleResetPassword(document.querySelector('input[name="email"]').value)}
                  className="text-blue-500 cursor-pointer"
                >
                
                </span>
              </Link></div>
              <button className="btn btn-neutral mt-4 border-none bg-blue-400">Login</button>

              {/* Google Signin */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="mt-5  flex items-center justify-center gap-3 bg-blue-50 text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

            </fieldset>
            <p>Don't have an account? Please <Link to='/signup' className='text-blue-500 underline'>Signup</Link></p>
          </form>)}

        </div>
      </div>
    </div>
  );
};

export default Login;