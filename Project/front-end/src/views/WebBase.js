import './WebBase.css'
import weblogo from './bloglogo.webp'
import ppic from '../static/propic.jpg'
import person from '../static/person.png'
import food from '../static/food.png'
import travel from '../static/travel.jpg'
import signin from '../static/signin.jpg'
import automob from '../static/automobile.webp' 
function WebBase() {

    return (

        <div className='grid-lay'>
            
            <div className="mainHeader">

                <h1>BLOGOSPHERE</h1>

            </div>

            <div className="navBar">

                <ul>
                   
                    <li> <img src={person} height={"35px"} alt="image" style={{float:"left",paddingRight:"22px",paddingLeft:"10px"}}></img>Profile</li>
                    <li><img src={travel} height={"40px"} alt="image" style={{float:"left",paddingRight:"20px",paddingLeft:"10px"}}></img>Travel</li>
                    <li><img src={food} height={"40px"} alt="image" style={{float:"left",paddingRight:"10px",paddingLeft:"10px"}}></img>Food</li>
                    <li><img src={automob} height={"40px"} alt="image" style={{float:"left",paddingRight:"22px",paddingLeft:"10px"}}></img>Automobile</li>
                    <li><img src={signin} height={"42px"} alt="image" style={{float:"left",paddingRight:"14px",paddingLeft:"10px"}}></img>Sign/SignUp</li>
                </ul>

            </div>


            <footer className="About">

                <p>This website was built by A1 batch.Copyright @2023.</p>
                <p>All rights reserved</p>
                <p>Contact information<a href="#">Gmail link</a></p>

            </footer>



        </div>

    )


}


export default WebBase;