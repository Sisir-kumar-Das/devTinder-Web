import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constant";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, SetPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "login",
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (e) {
      setError(true);
      console.log("Error", e);
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "signup",
        {
          emailId,
          password,
          firstName,
          lastName,
        },
        { withCredentials: true },
      );
      dispatch(addUser(res.data));
      navigate("/profile");
    } catch (e) {
      setError(true);
      console.log("Error", e);
    }
  };

  return (
    <div className="flex justify-center align-middle min-h-[70vh]">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-lg border p-6">
        <legend className="fieldset-legend p-4 font-bold">
          {isLoginForm ? "Login" : "Sign Up"}
        </legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />

        {!isLoginForm ? (
          <>
            <label className="label">First Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label className="label">Last Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </>
        ) : (
          <></>
        )}

        <label className="label">Password</label>
        <input
          type="password"
          className="input w-full"
          placeholder="Password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
        />
        {error ? (
          <p className="text-red-500">Error Occured While login.</p>
        ) : (
          <></>
        )}
        <button
          className="btn  mt-4 w-full btn-primary"
          onClick={isLoginForm ? handleLogin : handleSignUp}
        >
          {isLoginForm ? "Login" : "Sign Up"}
        </button>

        <p
          className="mx-auto cursor-pointer py-2 underline"
          onClick={() => setIsLoginForm((value) => !value)}
        >
          {isLoginForm
            ? "New User? Sign up here."
            : "Existing User please login."}
        </p>
      </fieldset>
    </div>
  );
};

export default Login;
