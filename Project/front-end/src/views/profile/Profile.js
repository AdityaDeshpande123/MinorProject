import React, { useState } from "react";
import styles from './Profile.module.css'
import ppic from '../../static/person.png'
import back from '../../static/dashback.jpeg'
function Profile() {
    document.body.style.backgroundImage = `url(${back})`;
    document.body.style.backgroundSize = "1600px 800px";
    document.body.style.backgroundRepeat = "no-repeat";
    const arr = {
        username: "Aditya Deshpande",
        about: "I am keen writer and very much interested in sharing my thoughts,opinions and experience with other.Likewise, the number of sentences in a paragraph can change based on the style of the writer. Some authors prefer longer, more descriptive paragraphs, while other authors prefer shorter, faster-paced paragraphs.Last, the conclusion wraps up the idea, sometimes summarizing what’s been presented or transitioning to the next paragraph. The content of the conclusion depends on the type of paragraph, and it’s often acceptable to end a paragraph with a final piece of support that concludes the thought instead of a summary. ",
        ppic: require('../../static/person.png'),
        nblogs: "2",
        pviews: "2",
        popularity: "30%"
    };
    return (
        <div>

            <div className={styles.profileview}>

                <div className={styles.profilepic}>
                    <img src={arr.ppic} className={styles.proimg}></img>
                    <h1 className={styles.prname}>{arr.username}</h1>
                    <p className={styles.prabout}>{arr.about}</p>
                </div>
                <div className={styles.wrdetails}>

                    <p> Contact : 927138122</p>
                    <p> Email : xyz@gmail.com</p>

                </div>

            </div>

            <div className={styles.usrblogs}>

                <div className={styles.pblogs}>
                    <h1>Published Blogs</h1>
                </div>

                <div className={styles.sblogs}>

                    <h1>Saved Blogs</h1>
                </div>

            </div>



        </div>
    );


}

export default Profile;