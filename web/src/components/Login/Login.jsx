import React, { useState } from "react";
import "./login.css";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");
  return (
    <div className="main">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="sub">Login Here</h2>
      </div>
      <div className="sub1">
        <div className="login">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="emailpassword"
                  />
                </div>
              </label>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="emailpassword"
                  />
                  <AiOutlineEyeInvisible
                    className="icon-eye-invisible"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                </div>
              </label>
            </div>
            <div>
              <button className="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
