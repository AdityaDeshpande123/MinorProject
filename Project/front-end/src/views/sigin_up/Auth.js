
import React, { useState } from "react"

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")

  }
  document.body.style.backgroundImage="../static/signbg.jpg";
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
          <h3 className="tname"> Welcome to Blogosphere!</h3>
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
               Sign Up
              </span><br></br><br></br>
            </div>
            <div className="form-group mt-3">
              <label>Email address: </label><pre></pre>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter  email"
                size="30"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password: </label><pre></pre>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                size="30"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
         <h3 className="tname"> Welcome to Blogosphere!</h3>
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span><br></br><br></br>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label><pre></pre>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              size="30"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label><pre></pre>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
               size="30"
              />
          </div>
          <div className="form-group mt-3">
            <label>Password</label><pre></pre>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              size="30"
              />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}