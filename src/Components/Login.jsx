import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constant";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, SetPassword] = useState("");
  const [error, setError] = useState(false);
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

  return (
    <div className="flex justify-center align-middle min-h-[70vh]">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-lg border p-6">
        <legend className="fieldset-legend p-4 font-bold">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />

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
        <button className="btn  mt-4 w-full btn-primary" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
