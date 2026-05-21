import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, SetPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );
      console.log(res);
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <div className="flex justify-center align-middle">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
        <legend className="fieldset-legend">Login</legend>

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

        <button className="btn  mt-4 w-full btn-primary" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
