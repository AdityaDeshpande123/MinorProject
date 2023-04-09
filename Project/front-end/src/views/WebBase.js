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

                <h1 className={styles.base_h1}>BLOGOSPHERE</h1>

            </div>

            <div className={styles.navBar}>

                <ul className={styles.base_ul}>
                   
                    <li className={styles.base_li}> <img src={person} height={"35px"} alt="image" style={{float:"left",paddingRight:"22px",paddingLeft:"10px"}}></img>Profile</li>
                    <li className={styles.base_li}><img src={travel} height={"40px"} alt="image" style={{float:"left",paddingRight:"20px",paddingLeft:"10px"}}></img>Travel</li>
                    <li className={styles.base_li}><img src={food} height={"40px"} alt="image" style={{float:"left",paddingRight:"10px",paddingLeft:"10px"}}></img>Food</li>
                    <li className={styles.base_li}><img src={automob} height={"40px"} alt="image" style={{float:"left",paddingRight:"22px",paddingLeft:"10px"}}></img>Automobile</li>
                    <li onClick={()=> navigate('signup')} className={styles.base_li}><img src={signin} height={"42px"} alt="image" style={{float:"left",paddingRight:"14px",paddingLeft:"10px"}}></img>Sign/SignUp</li>
                </ul>

            </div>


            <footer className={styles.About}>

                <p>This website was built by A1 batch.Copyright @2023.</p>
                <p>All rights reserved</p>
                <p>Contact information<a href="#">Gmail link</a></p>

            </footer>



        </div>

    )


}


export default WebBase;