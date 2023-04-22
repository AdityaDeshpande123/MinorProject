import style from "./Template2.module.css"
import react,{usestate} from "react";
import person from '../../../static/person.png';
import signin from '../../../static/signin.jpg';
import { useNavigate } from 'react-router-dom';
import upload from '../../../static/upload.png';


function Template() {


    var imgBox= document.getElementById("imgBox");

    var loadFile = function(Event){
        imgBox.style.backgroundImage="url("+ URL.createObjectURL(Event.target.files[0]) +")";
    }
    
    return (
          <div className={style.main}>
          <div className={style.mainHeader}>
          <h1 className={style.base_h1}>BLOGOSPHERE</h1>
      </div>
      <div className={style.navBar}>

                <ul className={style.base_ul}>
                   
                    <li  className={style.base_li}> <img src={person} height={"35px"} alt="image" style={{float:"left",paddingRight:"22px",paddingLeft:"10px"}}></img>Profile</li>
                    <li  className={style.base_li}><img src={signin} height={"42px"} alt="image" style={{float:"left",paddingRight:"14px",paddingLeft:"10px"}}></img>Sign/SignUp</li>
                </ul>

            </div>
            <div className={style.temp2}>
            <div className={style.title}>
            </div>
            <hr className={style.line}></hr>
            <div className={style.blog} id="imgBox">
            <input type="file" accept="image/*" name="image" id="main_img" className={style.file_ip} onChange="loadFile(Event)" />
            <label for="main_img"><img src={upload} className={style.plusimg}></img></label> 

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