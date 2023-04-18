import React, { useState } from "react";
import styles from './Profile.module.css'
import ppic from '../../static/author.jpeg'
import back from '../../static/dashback2.jpg'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie } from 'recharts';
import Pichart from './pichart/Pichart.js'
import dataany from '../../static/dataany.png'
import { useNavigate } from "react-router-dom";
function Profile() {

    const navigate = useNavigate();

    document.body.style.backgroundImage = `url(${back})`;
    // document.body.style.backgroundColor = "rgba(101,99,99,255)"
    document.body.style.backgroundSize = "1600px 800px";
    document.body.style.backgroundRepeat = "no-repeat";
    const arr = {
        username: "Austin Kleon",
        about: "Austin Kleon is the New York Times bestselling author of a trilogy of illustrated books about creativity in the digital age: Steal Like An Artist, Show Your Work!, and Keep Going. He’s also the author of Newspaper Blackout, a collection of poems made by redacting the newspaper with a permanent marker. His books have been translated into dozens of languages and have sold over a million copies worldwide. He’s been featured on NPR’s Morning Edition, PBS Newshour",
        ppic: require('../../static/author.jpeg'),
        nblogs: "2",
        pviews: "2",
        popularity: "30%",
        likes: "100"
    };

    let datayear = [

        {
            Para: '2021',
            Views: 24,
            Likes: 12
        },
        {
            Para: '2022',
            Views: 26,
            Likes: 13
        },
        {
            Para: '2023',
            Views: 30,
            Likes: 15
        },
        {
            Para: '2024',
            Views: 18,
            Likes: 6
        },
        {
            Para: '2025',
            Views: 35,
            Likes: 20

        },
        {
            Para: '2025',
            Views: 31,
            Likes: 23

        },
        {
            Para: '2025',
            Views: 45,
            Likes: 32

        },
        {
            Para: '2025',
            Views: 50,
            Likes: 35

        },
        {
            Para: '2025',
            Views: 45,
            Likes: 25

        },
        {
            Para: '2025',
            Views: 60,
            Likes: 50

        },
        {
            Para: '2025',
            Views: 42,
            Likes: 23

        },
        {
            Para: '2025',
            Views: 90,
            Likes: 80

        },

    ];
    let datamonth = [

        {
            Para: 'Jan',
            Views: 14,
            Likes: 6
        },
        {
            Para: 'Feb',
            Views: 13,
            Likes: 6
        },
        {
            Para: 'Mar',
            Views: 15,
            Likes: 3
        },
        {
            Para: 'Apr',
            Views: 9,
            Likes: 2
        },
        {
            Para: 'May',
            Views: 6,
            Likes: 2

        },
        {
            Para: 'Jun',
            Views: 21,
            Likes: 10

        },
        {
            Para: 'Jul',
            Views: 21,
            Likes: 8

        },
        {
            Para: 'Aug',
            Views: 50,
            Likes: 35

        },
        {
            Para: 'Sep',
            Views: 45,
            Likes: 25

        },
        {
            Para: 'Oct',
            Views: 60,
            Likes: 50

        },
        {
            Para: 'Nov',
            Views: 42,
            Likes: 23

        },
        {
            Para: 'Dec',
            Views: 90,
            Likes: 80

        }


    ];

    let dataDay = [
        {
            Para: "Mon",
            Views: 3,
            Likes: 1

        },
        {
            Para: "Tue",
            Views: 4,
            Likes: 2

        },
        {
            Para: "Wed",
            Views: 5,
            Likes: 3

        },
        {
            Para: "Thu",
            Views: 2,
            Likes: 1

        },
        {
            Para: "Fri",
            Views: 8,
            Likes: 3

        },
        {
            Para: "Sat",
            Views: 12,
            Likes: 8

        },
        {
            Para: "Sun",
            Views: 20,
            Likes: 10

        }


    ];

    let piedata = [
        {
            type: "Travel",
            bpub: 3
        },
        {
            type: "Food",
            bpub: 2
        },
        {
            type: "Automobile",
            bpub: 4
        }
    ];

    const [datas, setDatas] = useState(datayear);

    function sortAnalytics() {
        let str = document.getElementById('drop').value;
        if (str === "Year")
            setDatas(datayear);
        else if (str === "Month")
            setDatas(datamonth)
        else if (str === "Day")
            setDatas(dataDay)

    }

    function nav1(urli)
    {
        navigate(urli);

    }



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

                <div className={styles.pblogs} onClick={()=>{nav1("publishblog")}}>
                    <h1>Published Blogs</h1>
                </div>

                <div className={styles.sblogs} onClick={()=>{nav1("savedblog")}}>

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
                    <p className={styles.barheader}>
                        Total Views :<strong>100 </strong>
                    </p>

                    <div className={styles.seanalytics}>
                        <label>Sort By</label>
                        <select onChange={sortAnalytics} id="drop">
                            <option value="Year">Year</option>
                            <option value="Month">Month</option>
                            <option value="Day">Day</option>
                        </select>

                    </div>



                    <BarChart id="userbar"
                        width={800}
                        height={500}
                        data={datas}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        className={styles.barChart}

                    >


                        <XAxis dataKey="Para" fill="green" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Views" fill="rgba(51,115,232,255)" />
                        <Bar dataKey="Likes" fill="rgba(248,193,48,255)"></Bar>

                    </BarChart>

                    <div className={styles.pieChar}>
                        <p>Total Blogs Published<br></br><span>{arr.nblogs}</span></p>
                       
                    </div>
                    <br></br><br></br><br></br>
                    <Pichart></Pichart>
                   



                </div>




            </div>



        </div>
    );


}

export default Profile;