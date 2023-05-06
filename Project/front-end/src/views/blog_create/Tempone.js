import styles from './Tempone.module.css'
import createblogbg1 from '../../static/createblogbg1.jpg'
import { Router, useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Tempone() {
    const navigate = useNavigate();
    document.body.style.backgroundImage = `url(${createblogbg1})`;
    document.body.style.backgroundSize = "1600px 900px";

   
    function nav1() {
        const urli = document.getElementById('choosetemplate').value;
        navigate(urli);
    }

    return (
        <>
            <div className={styles.headdiv}>
                <h1 className={styles.heading}>BLOGOSPHERE</h1>


                <label for="choosetemplate" className={styles.dropdown}>Template</label>
                <select name="choosetemplate" id="choosetemplate" className={styles.dropdownoptions} onChange={nav1}>
                    <option>Choose a Template</option>
                    <option value="temp1">Template 1</option>
                    <option value="temp2">Template 2</option>
                    <option value="temp3">Template 3</option>
                </select>

                <button className={styles.bold}>Bold</button>
                <button className={styles.italic}>Italic</button>


            </div>

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
                        <input placeholder='Write a blog' type="text" className={styles.textinput}></input>
                    </div>
                    <button className={styles.blogsubmit}>PUBLISH</button>
                    <button className={styles.blogsave}>SAVE DRAFT</button>
                </form>


            </div>


        </>


    );
}

export default Tempone;