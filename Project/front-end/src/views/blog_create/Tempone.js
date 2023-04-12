import styles from './Tempone.module.css'
import createblogbg1 from '../../static/createblogbg1.jpg'

function Tempone() {

    document.body.style.backgroundImage=`url(${createblogbg1})`;
    document.body.style.backgroundSize= "1600px 900px";

    return (
        <>
        <h1 className={styles.heading}>BLOGOSPHERE</h1>

            <div className={styles.blogcreate}>

                <form className={styles.createform}>
                    <div className={styles.createformdiv}>
                        {/*<label htmlFor="inputfile">
                    <i class="fa-solid fa-circle-plus"></i>
                    </label>
                    <input type="file" id="inputfile"/>*/}
                        <input type="text" placeholder='Title' className={styles.titleinput} />
                    </div>

                    <div className={styles.createformdiv}>
                        <textarea placeholder='Write a blog' type="text" className={styles.textinput}></textarea>
                    </div>
                    <button className={styles.blogsubmit}>PUBLISH</button>
                </form>
            </div>


        </>


    );
}

export default Tempone;