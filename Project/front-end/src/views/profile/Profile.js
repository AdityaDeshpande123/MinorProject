import React, { useState } from "react";
import styles from './Profile.module.css'
import ppic from '../../static/person.png'
function Profile()
{
    const arr = {
        username : "Aditya",
        ppic : require('../../static/person.png'),
        nblogs : "2",
        pviews : "2",
        popularity : "30%"
    };
    return(
        <div>

            <div className={styles.profileview}>

                <div className={styles.profilepic}>
                    <h1>{arr.username}</h1>

                    <img src={arr.ppic}></img>

                </div>

                <div className={styles.pdetails}>

                </div>

            </div>

            <div className={styles.panalytics}>

            </div>



        </div>
    );


}

export default Profile;