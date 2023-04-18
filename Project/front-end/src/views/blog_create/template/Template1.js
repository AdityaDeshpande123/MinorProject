import style from "./Template1.module.css"
import react,{usestate} from "react";
import person from '../../../static/person.png';
import signin from '../../../static/signin.jpg';
import { useNavigate } from 'react-router-dom';

function Template() {
    
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
            <div className={style.temp1}>
            <div className={style.title}>
            </div>
            <hr className={style.line}></hr>
            <div className={style.blog}>
             
            </div> <br></br><hr className={style.line}></hr>
            <div className={style.t1}>
            <div className={style.text1}>
            </div>
            <div className={style.iim}>
            </div>
            <div className={style.text3}>
            </div>
            </div>
            <div className={style.rights}>
            </div>
            <div className={style.rtext}>
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