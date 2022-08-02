import React, { useState } from "react";
import "./Login.css";
import validator from "validator";

function Login(props) {
  const [error, setError] = useState(false);

  const handleReset = () => {
    if (
      !validator.isEmail(props.email) ||
      props.name.length < 4 ||
      props.email.length < 3
    ) {
      setError(true);
    } else {
      props.setLogin(false);
    }
  };

  return (
    <div className="Login">
      <div className="Login-width">
        <h2>Login</h2>
        {error && <p className="colorred">*Wrong Credentials</p>}
        <h4>
          Name<span className="colorred">*</span>
        </h4>
        <input
          required
          className="Login-input"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
          // onKeyDown={(e)=>handleReset(e)}
          placeholder="Enter Your Name"
        />
        <h4>
          Email<span className="colorred">*</span>
        </h4>
        <input
          required
          className="Login-input"
          value={props.email}
          type="email"
          onChange={(e) => props.setEmail(e.target.value)}
          placeholder="Enter Your email id"
        />
        <button
          onClick={handleReset}
          className="Login-btn"
          onKeyDown={(e) => handleReset(e)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
