import WebBase from "../WebBase";
import styles from './Homepage.module.css'
import Card from "../card-view/Card";
import React, { useState } from "react";
import bg1 from '../../static/bg1.jpeg'
import bg2 from '../../static/bg1.jpg'
import search from '../../static/search-512.png'
import { useNavigate } from 'react-router-dom';
function Homepage() {
    let counter = 0;
   
    const [publishblogs] = useState([
        {

            title: "Title 1",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")

        },
        {

            title: "Title 2",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")

        },
        {

            title: "Title 3",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")

        },
        {

            title: "Title 4",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")
        },
        {

            title: "Title 5",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")
        },
        {

            title: "Title 6",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")
        },
        {

            title: "Title 7",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")
        },
        {

            title: "Title 8",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")
        },
        {

            title: "Title 9",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")
        },
        {

            title: "Title 10",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")
        },
        {

            title: "Title 11",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")
        },
        {

            title: "Title 12",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")
        },
        {

            title: "Title 13",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")
        },
        {

            title: "Title 14",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")
        },
        {

            title: "Title 15",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg")
        },
        

    ]);
    const arr = [];
    for (let i = 0; i < publishblogs.length; i += 3) {
        arr.push(publishblogs.slice(i, i + 3));
    }
    console.log(arr)
    return (

        <div>

            <WebBase></WebBase>
            <div className={styles.searchBar}>

                <input type="text" className={styles.search}></input>
                <img src={search} alt="search" className={styles.searchImg}></img>



            </div>

            <div className={styles.blog_grid}>

                <table className={styles.blog}>

                    {
                        arr.map((item) => (

                            <tr>

                                {item.map((ele) => (

                                    <td className={styles.mblog}>

                                        <div className={styles.nblock}>
                                            <img src={ele.img} className={styles.imgCont}></img>
                                            <h2 className={styles.titleCont}>{ele.title}</h2>
                                            <p className={styles.bodyCont}>{ele.Message}</p>

                                        </div>


                                    </td>

                                ))}


                            </tr>

                        ))


                    }

                </table>



            </div>



        </div>


    );
}


export default Homepage;