import styles from './Signpage.module.css'
import back from './bg1.jpg'
function Signpage() {

    document.body.style.backgroundImage = `url(${back})`;
    document.body.style.backgroundSize = "1600px 900px"
    return (

        <div>

            <form className='sign_form'>
                <h2 className='sign_h2'>BLOGOSPHERE</h2>
                
                <label>Enter your name</label><br></br>
                <label>Login ID</label><br></br>
                <input type='text'></input> <br></br><br></br>
                <label>Password</label><br></br>
                <input type='text'></input> <br></br><br></br>

                <button className='sign_button'>Signup</button>
                <button className='sign_button'>Login</button>




            </form>


        </div>


    );


}


export default Signpage;