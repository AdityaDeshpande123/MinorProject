import style from "./Signpage.module.css"
import React, { useState } from "react"
import signinner from '../../static/signinner.jpg'

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")

  }
  document.body.style.backgroundImage=`url(${signinner})`;
  document.body.style.backgroundSize = "1600px 900px";
  if (authMode === "signin") {
    return (
      <div className={style.Auth_form_container}>
        <form className={style.Auth_form}>
          <div className={style.Auth_form_content}>
          <h3 className={style.tname}> Welcome to Blogosphere!</h3>
            <h3 className={style.Auth_form_title}>Sign In</h3>
            <div className={style.text_center}>
              Not registered yet?{" "}
              <span className={style.link_primary} onClick={changeAuthMode}>
               Sign Up
              </span><br></br><br></br>
            </div>
            <div className={style.form_group}>
              <label>Email address: </label><pre></pre>
              <input
                type="email"
                className={style.form_control}
                placeholder=" Enter email"
                size="30"
              />
            </div>
            <div className={style.form_group}>
              <label>Enter Password: </label><pre></pre>
              <input
                type="password"
                className={style.form_control}
                placeholder=" Enter password"
                size="30"
              />
            </div>
            <div className={style.d_grid}>
              <button type="submit" className={style.btn}>
                Sign In
              </button>
            <button type="reset" className={style.btn_reset}>
              Reset
            </button>
            </div>
            <p className={style.text_center}>
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className={style.Auth_form_container}>
      <form className={style.Auth_form} style={{height:"540px"}}>
        <div className={style.Auth_form_content}>
         <h3 className={style.tname}> Welcome to Blogosphere!</h3>
          <h3 className={style.Auth_form_title}>Sign Up</h3>
          <div className={style.text_center}>
            Already registered?{" "}
            <span className={style.link_primary} onClick={changeAuthMode}>
              Sign In
            </span><br></br><br></br>
          </div>
          <div className={style.form_group}>
            <label>Full Name</label><pre></pre>
            <input
              type="name"
              className={style.form_control}
              placeholder=" e.g Jane Doe"
              size="30"
            />
          </div>
          <div className={style.form_group}>
            <label>Bio</label><pre></pre>
            <textarea
              type="text"
              className={style.form_control}
              placeholder="Enter your Bio"
              size="30"
              style={{width:"41.7vh"}}
            />
          </div>
          <div className={style.form_group}>
          <label>Phone Number</label><pre></pre>
          <input
            type="tel"
            className={style.form_control}
            placeholder="Phone Number"
             size="30"
            />
            </div>
          <div className={style.form_group}>
            <label>Email address</label><pre></pre>
            <input
              type="email"
              className={style.form_control}
              placeholder=" Email Address"
               size="30"
              />
          </div>
          <div className={style.form_group}>
            <label>Password</label><pre></pre>
            <input
              type="password"
              className={style.form_control}
              placeholder=" Password"
              size="30"
              />
          </div>
          
          <div className={style.d_grid}>
            <button type="submit" className={style.btn}>
              Sign Up
            </button>
            <button type="reset" className={style.btn_reset}>
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}