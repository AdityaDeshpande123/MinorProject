import styles from './Tempone.module.css'
import createblogbg1 from '../../static/createblogbg1.jpg'

function Tempone() {

    document.body.style.backgroundImage=`url(${createblogbg1})`;
    document.body.style.backgroundSize= "1600px 900px";

    return (
        <>
        <div className={styles.headdiv}>
            <h1 className={styles.heading}>BLOGOSPHERE</h1>

            
            <label for="choosetemplate" className={styles.dropdown}>Choose a Template</label>
                <select name="choosetemplate" id="choosetemplate" className={styles.dropdownoptions}>
                    <option value="temp1">Template 1</option>
                    <option value="temp2">Template 2</option>
                    <option value="temp3">Template 3</option>
                </select>

                <button className={styles.bold}>B</button>
                <button className={styles.italic}>I</button>


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
                        <textarea placeholder='Write a blog' type="text" className={styles.textinput}></textarea>
                    </div>
                    <button className={styles.blogsubmit}>PUBLISH</button>
                    <button className={styles.blogsave}>SAVE DRAFT</button>
                </form>


            </div>


        </>


    );
}

export default Tempone;