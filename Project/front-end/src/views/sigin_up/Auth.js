import style from "./Signpage.module.css"
import React, { useState, useEffect } from "react"
import signinner from '../../static/signinner.jpg'
import axios from 'axios';
import { useNavigate } from "react-router-dom";




export default function (props) {

  const navigate = useNavigate();
 
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")

  }
  


  document.body.style.backgroundImage = `url(${signinner})`;
  document.body.style.backgroundSize = "1600px 900px";
  if (authMode === "signin") {
    return (
      <div className={style.Auth_form_container}>
        <form className={style.Auth_form} onSubmit={(e) => {

          e.preventDefault();

          let email = document.getElementById('email').value;
          let pass = document.getElementById('password').value;


          //alert(gemail + typeof(gemail));
          axios.get(`http://localhost:8080/getauthor/${email}`).then((res) => {

            let data = res.data;
            if (data != null) {
              if (data.pass === pass) {
                navigate('/',{state: true});

              }
              else {
                alert("Incorrect password");
              }
            }
            else {
              alert("No such user exist");
            }


          }).catch((err) => {
            alert(err);
          });

        }}>
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
                id='email'
                size="30"
              />
            </div>
            <div className={style.form_group}>
              <label>Enter Password: </label><pre></pre>
              <input
                type="password"
                className={style.form_control}
                placeholder=" Enter password"
                id='password'
                size="30"
              />
            </div>
            <div className={style.d_grid}>
              <button className={style.btn}>
                Sign In
              </button>
              <button className={style.btn_reset}>
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
      <form className={style.Auth_form}>
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
            <button className={style.btn}>
              Sign Up
            </button>
            <button className={style.btn_reset}>
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}