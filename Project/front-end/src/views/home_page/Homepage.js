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
    const [authid,setAuthid] = useState(location.authid)
    
    const [publishblogs] = useState([
        {

            title: "Purchasing a car",
            Message: "In todays world where there are a wide variety of options for purchasing a car",
            img: require("../../static/blogimgs/buycar.jpeg"),
            type : "Automobile"


        },
        {

            title: "Self driving under scrutiny",
            Message: "Autonomous driving is not so much about being able to check your emails or enjoy",
            img: require("../../static/blogimgs/selfdrive.jpeg"),
            type : "Automobile"

        },
        {

            title: "Best Restaurants in Mysore",
            Message: "When it comes to having a good meal we keep wondering which is the best restaurant",
            img: require("../../static/blogimgs/restaurants.jpeg"),
            type : "Food"

        },
        {

            title: "Miso Crunch Salad",
            Message: "Shredded cabbage and kale, shrimp, avocado, cilantro and chili-flavored peanuts,",
            img: require("../../static/blogimgs/salad.jpg"),
            type : "Food"
        },
        {

            title: "A Small Hike",
            Message: "It was a beautiful sunny day in February at Fagu in Himachal Pradesh",
            img: require("../../static/blogimgs/hike.jpeg"),
            type : "Travel"
        },
        {

            title: "The Tranquil Morning Walk",
            Message: "I recently stayed at the Novotel Vizag and I could see the Ramakrishna Beach",
            img: require("../../static/blogimgs/mwalk.jpeg"),
            type : "Travel"
        },
        {

            title: "Title 7",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Automobile"
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

            title: "My Visit to Aahana Resort",
            Message: "Sometime back I visited Aahana Resorts right next to the Jim Corbettt National Park",
            img: require("../../static/blogimgs/ahanaresort.jpeg"),
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

            title: "Moods of Mt. Fishtail",
            Message: "In all my previous trips to Pokhara I barely got a glimpse of Mt. Machapuchare or Mt. Fishtail",
            img: require("../../static/blogimgs/fishtail.jpeg"),
            type : "Travel"
        },
        {

            title: "The Beach Road Vizag",
            Message: "Rooftops provide incredible photo opportunities! Novotel Vizag has a wonderful",
            img: require("../../static/blogimgs/vizag.jpg"),
            type : "Travel"
        },
        {

            title: "Title 15",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Automobile"
        },
        {

            title: "Title 16",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Automobile"


        },
        {

            title: "Title 17",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Food"


        },
        {

            title: "Fall Colors in Ladakh",
            Message: "The second trip of the year was to Leh, Ladakh. I was yearning to go on a break!",
            img: require("../../static/blogimgs/fallcolours.jpeg"),
            type : "Travel"


        },
        {

            title: "Title 19",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Automobile"


        },
        {

            title: "Title 20",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Food"


        },
        {

            title: "Title 21",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Travel"


        },
        {

            title: "Title 22",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Travel"


        },
        {

            title: "Title 23",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Food"


        },
        {

            title: "Title 24",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Automobile"


        },
        {

            title: "Title 25",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Travel"


        },
        {

            title: "Title 26",
            Message: "This is the message body",
            img: require("../../static/bg1.jpeg"),
            type : "Automobile"


        }
        

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
                 authid = {authid}
            
            ></WebBase>
            
            {/* <div className={styles.searchBar}>

                <input type="text" className={styles.search}></input>
                <img src={search} alt="search" className={styles.searchImg}></img>



            </div> */}

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