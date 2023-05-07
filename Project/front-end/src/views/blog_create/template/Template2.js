import style from "./Template2.module.css"
import React, { useState } from "react";
import person from '../../../static/person.png';
import signin from '../../../static/signin.jpg';
import { useNavigate } from 'react-router-dom';
import upload from '../../../static/upload.png';


function Template() {

                const [file, setFile] = useState();
                function handleChange(e) 
                {
                    console.log(e.target.files);
                     setFile(URL.createObjectURL(e.target.files[0]));
                }
    
    return (
          <div className={style.main}>
          <div className={style.mainHeader}>
          <h1 className={style.base_h1}>BLOGOSPHERE</h1>
            </div>
            {/* <div className={style.navBar}> 

                <ul className={style.base_ul}>
                   
                    <li  className={style.base_li}> <img src={person} height={"35px"} alt="image" style={{float:"left",paddingRight:"22px",paddingLeft:"10px"}}></img>Profile</li>
                    <li  className={style.base_li}><img src={signin} height={"42px"} alt="image" style={{float:"left",paddingRight:"14px",paddingLeft:"10px"}}></img>Sign/SignUp</li>
                </ul>

            </div> */}
            <div className={style.temp2}>
            <div className={style.title}>
            </div>
            <hr className={style.line}></hr>
            <div className={style.blog} >
            <input type="file" className={style.file_ip} onChange={handleChange} />
            <img src={file} className={style.blog}  style={{left:"0px",top:"0px"}}></img>
            {/* <img src={file} className={style.ipimg}></img> */}
            {/* <label for="main_img"><img src={file} className={style.plusimg}></img></label>  */}

            </div>
            <div className={style.im1}>
            </div>
            <div className={style.t1}>
            </div>
            <div className={style.im2}>
            </div>
            <div className={style.t2}>
            </div>
            <div className={style.im3}>
            </div>
            <div className={style.t3}>
            </div>
            </div>
            <footer className={style.About}>

            <img className={style.fimg}  style={{width:"21vh",height:"21vh"}}></img>
            <div className={style.info}>
            <h2 style={{color:"white",fontSize:"30px"}}>Info</h2>
             <ul style={{listStyleType:"none"}}>
              <li className={style.flist} href="#">About Us</li>
              <li className={style.flist} href="#">Terms & Conditions</li>
             </ul>
            </div>
            <div className={style.contact}>
              <h2 style={{color:"white",fontSize:"30px"}}>Contact Us</h2>
              <h4 style={{paddingTop:"18px",color:"rgb(161, 161, 161)"}}>NIE Boys Hostel, Mysore - 570008</h4>
              <h4 style={{padding:"6px",color:"rgb(161, 161, 161)"}}>Phone No : +91 1234-234-234</h4>
              <h4 style={{padding:"0px",color:"rgb(161, 161, 161)"}}>Email : Blogosphere@gmail.com</h4>
              </div>
              <div className={style.copyright}>
              <h4 style={{padding:"8px"}}>  BLOGOSPHERE Copyright © 2023 - All rights reserved  ||  Batch A1</h4>
              </div>
            
            </footer>
        </div>
    )
}

export default Template