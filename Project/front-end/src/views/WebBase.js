import styles from'./WebBase.module.css'
import weblogo from './bloglogo.webp'
import ppic from '../static/propic.jpg'
import person from '../static/person.png'
import food from '../static/food.png'
import travel from '../static/travel.jpg'
import signin from '../static/signin.jpg'
import automob from '../static/automobile.webp' 
import back from '../static/bg1.jpg'
import { useNavigate } from 'react-router-dom';
function WebBase() {

    const navigate = useNavigate()
    
    document.body.style.backgroundImage = `url(${back})`;
    document.body.style.backgroundSize = "1600px 900px";
    

    return (
         


        <div className={styles.grid_lay}>
            
            <div className={styles.mainHeader}>

                <h1 className={styles.base_h1}>BLOGOSPHERE <button onClick={()=> navigate('createblog')} className={styles.wrBlog}>Write a blog</button></h1>
                

            </div>

            <div className={styles.navBar}>

                <ul className={styles.base_ul}>
                   
                    <li onClick={()=> navigate('profile')} className={styles.base_li}> <img src={person} height={"35px"} alt="image" style={{float:"left",paddingRight:"22px",paddingLeft:"10px"}}></img>Profile</li>
                    <li className={styles.base_li}><img src={travel} height={"40px"} alt="image" style={{float:"left",paddingRight:"20px",paddingLeft:"10px"}}></img>Travel</li>
                    <li className={styles.base_li}><img src={food} height={"40px"} alt="image" style={{float:"left",paddingRight:"10px",paddingLeft:"10px"}}></img>Food</li>
                    <li className={styles.base_li}><img src={automob} height={"40px"} alt="image" style={{float:"left",paddingRight:"22px",paddingLeft:"10px"}}></img>Automobile</li>
                    <li onClick={()=> navigate('signup')} className={styles.base_li}><img src={signin} height={"42px"} alt="image" style={{float:"left",paddingRight:"14px",paddingLeft:"10px"}}></img>Sign/SignUp</li>
                </ul>

            </div>


            <footer className={styles.About}>

            <img className={styles.fimg}  style={{width:"21vh",height:"21vh"}}></img>
            <div className={styles.info}>
            <h2 style={{color:"white",fontSize:"30px"}}>Info</h2>
             <ul style={{listStyleType:"none"}}>
              <li className={styles.flist} href="#">About Us</li>
              <li className={styles.flist} href="#">Terms & Conditions</li>
             </ul>
            </div>
            <div className={styles.contact}>
              <h2 style={{color:"white",fontSize:"30px"}}>Contact Us</h2>
              <h4 style={{paddingTop:"18px",color:"rgb(161, 161, 161)"}}>NIE Boys Hostel, Mysore - 560097</h4>
              <h4 style={{padding:"6px",color:"rgb(161, 161, 161)"}}>Phone No : +91 1234-234-234</h4>
              <h4 style={{padding:"0px",color:"rgb(161, 161, 161)"}}>Email : Blogosphere@gmail.com</h4>
              </div>
              <div className={styles.copyright}>
              <h4 style={{padding:"8px"}}>  BLOGOSPHERE Copyright © 2023 - All rights reserved  ||  Project Batch-A1</h4>
              </div>

            </footer>



        </div>

    )


}


export default WebBase;