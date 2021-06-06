import React, { useState } from "react";
import { Link } from "react-router-dom";

function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    //TODO: singin action
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sing In</h1>
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sing In
          </button>
        </div>
        <div>
          <label />
          <div>
            New costomer? <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SigninScreen;
