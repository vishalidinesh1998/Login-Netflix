import { useState } from 'react';
import './App.css';
import axios from 'axios';
import logo from './assets/Images/logo.jpg';
import bgimage from './assets/Images/bgimage.jpeg';
import { useNavigate } from 'react-router-dom';

function App() {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [userError, setUserError] = useState("");
  const [passError, setPassError] = useState("");
  const navigate = useNavigate();

  const handleuser = (evt) => {
    setuser(evt.target.value);
    if (evt.target.value.trim() !== "") {
      setUserError("");
    }
  };

  const handlepass = (evt) => {
    setpass(evt.target.value);
    if (evt.target.value.trim() !== "") {
      setPassError("");
    }
  };

  function check() {
    let valid = true;

    if (user.trim() === "") {
      setUserError("Please enter your email or mobile number");
      valid = false;
    }

    if (pass.trim() === "") {
      setPassError("Please enter your password");
      valid = false;
    }

    if (!valid) return;

    axios
      .get(`https://login-netflix-1.onrender.com/login?username=${user}&password=${pass}`)
      .then((data) => {
        if (data.data === true) {
          navigate("/sucess");
        } else {
          navigate("/fail");
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  }

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <img
        src={bgimage}
        alt="background"
        className="absolute h-full w-full object-cover"
      />

      {/* Netflix Logo */}
      <div className="absolute top-6 left-10 z-10">
        <img src={logo} alt="Netflix Logo" className="w-40 h-auto" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute h-full w-full bg-black bg-opacity-60"></div>

      {/* Login Form */}
      <div className="relative z-10 flex justify-center items-center min-h-screen py-10">
        <div className="bg-black bg-opacity-75 p-8 rounded-lg text-white w-[350px] space-y-4 min-h-[500px] flex flex-col justify-center">
          <h1 className="text-3xl font-bold">Sign In</h1>

          <input
            type="text"
            value={user}
            onChange={handleuser}
            placeholder="Email or mobile number"
            className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          />
          {userError && (
            <p className="text-red-500 text-sm">{userError}</p>
          )}

          <input
            type="password"
            value={pass}
            onChange={handlepass}
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          />
          {passError && (
            <p className="text-red-500 text-sm">{passError}</p>
          )}

          <button
            className="w-full p-2 bg-red-600 hover:bg-red-700 rounded font-semibold"
            onClick={check}
          >
            Sign In
          </button>

          <p className="text-center">OR</p>
          <button className="w-full p-2 bg-gray-600 hover:bg-gray-700 rounded">
            Use a Sign-in Code
          </button>
          <p className="text-sm text-center mt-2">
            <a href="#" className="underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
