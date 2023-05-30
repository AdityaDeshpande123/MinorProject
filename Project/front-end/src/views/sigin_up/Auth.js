import style from "./Signpage.module.css"
import React, { useState, useEffect } from "react"
import signinner from '../../static/signinner.jpg'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function (props) {

  //   const handlePic = (event) => {
  //     const file = event.target.files[0];
  //     const reader = new FileReader();

  //     reader.onload = (upload) => {
  //       const imageUrl = upload.target.result;
  //       //console.log(imageUrl)


  //       img.onload = () => {
  //         // Create a canvas element
  //         const canvas = document.createElement('canvas');
  //         const ctx = canvas.getContext('2d');

  //         // Set the canvas dimensions to the image dimensions
  //         canvas.width = img.width;
  //         canvas.height = img.height;

  //         // Draw the image onto the canvas
  //         ctx.drawImage(img, 0, 0, img.width, img.height);

  //         // Compress the image as a data URL with a specified quality (e.g., 0.7 for 70% quality)
  //         const compressedImageUrl = canvas.toDataURL('image/jpeg', 0.7);
  //         console.log(compressedImageUrl)
  //         // Do something with the compressed image URL (e.g., save it to state or send it to a server)
  //       };

  //       img.src = imageUrl;
  //     };






  //     // axios.post("http://localhost:8080/insertAuthPic",{
  //     //   path : {imageUrl},
  //     //   authname : "Aditya"
  //     // })
  //   };

  //   reader.readAsDataURL(file);

  // }
  const [image, setImage] = useState('')
  const handlePic = (event) => {




    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (upload) => {
      const imageUrl = upload.target.result;

      // Create an HTMLImageElement to load the image
      const img = new Image();

      img.onload = () => {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set the canvas dimensions to the image dimensions
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image onto the canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Compress the image as a data URL with a specified quality (e.g., 0.7 for 70% quality)
        const compressedImageUrl = canvas.toDataURL('image/jpeg', 0.2);
        console.log(compressedImageUrl)
        let val = "Aditya"
        const jsonData = JSON.stringify({
          authid: 69,
          path: "Aditya",
          authname: "Aditya"
        })


        axios.post("http://localhost:8080/insertAuthPic", {
          authid: 4,
          path: `${compressedImageUrl}`,
          authname: "Arvind Adiga"
        }).then((res) => {

        }).catch((err) => {
          console.log(err)
        })

      };

      img.src = imageUrl;
    };

    reader.readAsDataURL(file);
  };


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
                navigate('/', { state: true });

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
      <form className={style.Auth_form} style={{ height: "540px" }}>
        <div className={style.Auth_form_content}>
          <h3 className={style.tname}> Welcome to Blogosphere!</h3>
          <h3 className={style.Auth_form_title}>Sign Up</h3>
          <div className={style.text_center}>
            Already registered?{" "}
            <span className={style.link_primary} onClick={changeAuthMode}>
              Sign In
            </span><br></br><br></br>
          </div>
          <div className={style.auth_pic}>

            <input type="file" onChange={handlePic}></input>



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
              style={{ width: "41.7vh" }}
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