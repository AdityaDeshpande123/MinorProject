import React, { useState } from "react";
import styles from './Profile.module.css'
import ppic from '../../static/author.jpeg'
import back from '../../static/dashback1.jpg'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Profile() {
    document.body.style.backgroundImage = `url(${back})`;
    // document.body.style.backgroundColor = "rgba(101,99,99,255)"
    document.body.style.backgroundSize = "1600px 800px";
    document.body.style.backgroundRepeat = "no-repeat";
    const arr = {
        username: "Austin kleon",
        about: "Austin Kleon is the New York Times bestselling author of a trilogy of illustrated books about creativity in the digital age: Steal Like An Artist, Show Your Work!, and Keep Going. He’s also the author of Newspaper Blackout, a collection of poems made by redacting the newspaper with a permanent marker. His books have been translated into dozens of languages and have sold over a million copies worldwide. He’s been featured on NPR’s Morning Edition, PBS Newshour",
        ppic: require('../../static/author.jpeg'),
        nblogs: "2",
        pviews: "2",
        popularity: "30%",
        likes: "100"
    };
    const data = [
        {
            Year: '2021',
            Views: 24,
            Likes: 12
        },
        {
            Year: '2022',
            Views: 26,
            Likes: 13
        },
        {
            Year: '2023',
            Views: 30,
            Likes: 15
        },
        {
            Year: '2024',
            Views: 18,
            Likes: 6
        },
        {
            Year: '2025',
            Views: 35,
            Likes: 20

        },
        {
            Year: '2025',
            Views: 35,
            Likes: 20

        },
        {
            Year: '2025',
            Views: 35,
            Likes: 20

        },
        {
            Year: '2025',
            Views: 35,
            Likes: 20

        },
        {
            Year: '2025',
            Views: 35,
            Likes: 20

        },
        {
            Year: '2025',
            Views: 35,
            Likes: 20

        },
        {
            Year: '2025',
            Views: 35,
            Likes: 20

        },
        {
            Year: '2025',
            Views: 35,
            Likes: 20

        },

    ]
    return (
        <div>

            <div className={styles.profileview}>

                <div className={styles.profilepic}>
                    <img src={arr.ppic} className={styles.proimg}></img>
                    <h1 className={styles.prname}>{arr.username}</h1>
                    <p className={styles.prabout}>{arr.about}</p>
                </div>
                <div className={styles.wrdetails}>
                    <h3>Contact</h3>
                    <p>  927138122</p>
                    <p>  austin@austinkleon.com</p>

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


            <div className={styles.analytics}>

                <p className={styles.tviews}>
                    Total Profile Views <br></br> <span >{arr.pviews}</span>
                </p>
                <p className={styles.tblogs}>
                    Total Blogs Published <br></br> <span >{arr.nblogs}</span>
                </p>

                <p className={styles.tlikes}>
                    Total Likes <br></br> <span>{arr.likes}</span>

                </p>

                <div className={styles.analytics1}>
                    <h1 className={styles.barheader}>
                        Total 100 Views this year
                        <label>Sort By</label>
                        <select>
                            <option>Current</option>
                            <option value="Year">Year</option>
                            <option value="Month">Month</option>
                            <option value="Day">Day</option>



                        </select>
                    </h1>

                    <BarChart
                        width={1000}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        className={styles.barChart}

                    >


                        <XAxis dataKey="Year" fill="green" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Views" fill="rgba(51,115,232,255)" />
                        <Bar dataKey="Likes" fill="rgba(248,193,48,255)"></Bar>

                    </BarChart>



                </div>




            </div>



        </div>
    );


}

export default Profile;