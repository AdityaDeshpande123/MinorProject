import style from "./Template1.module.css"
import React,{useState} from "react";
import person from '../../../static/person.png';
import signin from '../../../static/signin.jpg';
import { useNavigate } from 'react-router-dom';
import plus from '../../../static/plus.jpeg';




function Template() {
        const [file, setFile] = useState();
        const [file1, setFile1] = useState();
        const [file2, setFile2] = useState();

        function handleChange(e) {
            console.log(e.target.files);
            setFile(URL.createObjectURL(e.target.files[0]));
        }
        function handleChange1(e1) {
            console.log(e1.target.files);
            setFile1(URL.createObjectURL(e1.target.files[0]));
        }
        function handleChange2(e2) {
            console.log(e2.target.files);
            setFile2(URL.createObjectURL(e2.target.files[0]));
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
            <form method="post" target="_self" action="">
            <div className={style.temp1}>
            <div className={style.title}>
            </div>
            <hr className={style.line}></hr>
            <div className={style.blog}> 
            <img src={file} className={style.blog} style={{left:"0px",top:"0px"}}/>
            
            <div className={style.add}><h1>+</h1>
            <div class={style.dropdown}>
            <label for="image1"><a href="#">Add Image</a></label>
            <input type="file" id="image1" name="image1" onChange={handleChange}></input>
             </div>
             </div>
            
            </div> <br></br><hr className={style.line}></hr>
            <div className={style.t1}>
            <div className={style.text1}>
            <textarea id="text1" name="text1" style={{width:"93.6vh",height: "68vh",border: "0px solid black",backgroundColor:"rgb(223, 220, 220)",padding:"10px"}}></textarea>
            </div>
            <div className={style.iim}>
            <img src={file1} className={style.iim} style={{left:"0px",top:"0px"}}/>
            <div className={style.add1}><h1>+</h1>
            <div class={style.dropdown}>
            <label for="image2"><a href="#">Add Image</a></label>
            <input type="file" id="image2" name="image2" onChange={handleChange1}></input>
            
             </div>
            </div>
            </div>
            <div className={style.text3}>
            <textarea id="text3" name="text3" style={{width:"43vh",height: "35vh",border: "0px solid black",backgroundColor:"rgb(223, 220, 220)",padding:"10px"}}></textarea>
            </div>
            </div>
            <div className={style.rights}>
            <img src={file2} className={style.rights} style={{left:"0px",top:"0px"}}/>
            <div className={style.add2}><h1>+</h1>
            <div class={style.dropdown}>
            <label for="image3"><a href="#">Add Image</a></label>
            <input type="file" id="image3" name="image3" onChange={handleChange2}></input>
            
             </div>
            </div>
            </div>
            <div className={style.rtext}>
            <textarea id="rtext" name="rtext" style={{width:"35vh",height: "61vh",border: "0px solid black",backgroundColor:"rgb(223, 220, 220)",padding:"10px"}}></textarea>
            </div>
            <button type="submit" className={style.b1}> Publish</button>
            <button type="draft" className={style.b2}>Save as draft</button>
            </div>
            </form>
            <footer className={style.About}>
               
                <p>This website was built by A1 batch.Copyright @2023.</p>
                <p>All rights reserved</p>
                <p>Contact information<a href="#">Gmail link</a></p>
            
            </footer>
          </div>
    )
}

export default Template