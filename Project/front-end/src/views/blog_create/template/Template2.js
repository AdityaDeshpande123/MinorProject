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

                <p>This website was built by A1 batch.Copyright @2023.</p>
                <p>All rights reserved</p>
                <p>Contact information<a href="#">Gmail link</a></p>
            
            </footer>
        </div>
    )
}

export default Template