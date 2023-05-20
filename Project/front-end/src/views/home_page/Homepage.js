import WebBase from "../WebBase";
import styles from './Homepage.module.css'
import Card from "../card-view/Card";
import React, { useState } from "react";
import bg1 from '../../static/bg1.jpeg'
import bg2 from '../../static/bg1.jpg'
import search from '../../static/search-512.png'
import { useLocation, useNavigate } from 'react-router-dom';
function splitArray(arr1)
{
    const arr = [];
    for (let i = 0; i < arr1.length; i += 3) {
        arr.push(arr1.slice(i, i + 3));
    }

    return arr;

}

function getBlogtype(arr,type)
{
    let ans = [];

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].type===type)
        {
            ans.push(arr[i])

        }
    }

    return ans;


}
function Homepage(props) {
    const location = useLocation();
    const [islogin,setLogin] = useState(location.state ? location.state : false);
    const [publishblogs] = useState([
        {

            title: "Title 1",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Automobile"


        },
        {

            title: "Title 2",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Automobile"

        },
        {

            title: "Title 3",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Food"

        },
        {

            title: "Title 4",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Food"
        },
        {

            title: "Title 5",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Automobile"
        },
        {

            title: "Title 6",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Travel"
        },
        {

            title: "Title 7",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Travel"
        },
        {

            title: "Title 8",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Food"
        },
        {

            title: "Title 9",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Food"
        },
        {

            title: "Title 10",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Travel"
        },
        {

            title: "Title 11",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Automobile"
        },
        {

            title: "Title 12",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Food"
        },
        {

            title: "Title 13",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Travel"
        },
        {

            title: "Title 14",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Travel"
        },
        {

            title: "Title 15",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Automobile"
        },
        

    ]);

    const travelBlogs = getBlogtype(publishblogs,"Travel");
    const foodBlogs = getBlogtype(publishblogs,"Food");
    const automobilelBlogs = getBlogtype(publishblogs,"Automobile");


    const arr = [];
    for (let i = 0; i < publishblogs.length; i += 3) {
        arr.push(publishblogs.slice(i, i + 3));
    }
    console.log(arr)

    const [homeData,sethomeData] = useState(arr)
    return (

        <div>

            <WebBase data={islogin} changeBlogs={sethomeData} splitArray = {splitArray}  

                 travelBlogs = {travelBlogs}
                 foodBlogs = {foodBlogs}
                 automobilelBlogs = {automobilelBlogs}
            
            ></WebBase>
            
            <div className={styles.searchBar}>

                <input type="text" className={styles.search}></input>
                <img src={search} alt="search" className={styles.searchImg}></img>



            </div>

            <div className={styles.blog_grid}>

                <table className={styles.blog}>

                    {
                        homeData.map((item) => (

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