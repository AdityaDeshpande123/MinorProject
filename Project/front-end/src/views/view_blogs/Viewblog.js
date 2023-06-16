import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Viewblog() {
    const location = useLocation()
    let bid = location.state
    if (!bid)
        bid = 0

    const img = require(`../../static/auth_blogs/${bid}/blog.png`)

    return (

        <>

            <h1>Hello {bid}</h1>
            <img src={img} alt="image" style={{height:"800px",width:"700px"}}></img>


        </>
    )
}


export default Viewblog;
