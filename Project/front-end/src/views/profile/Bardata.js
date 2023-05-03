import {React,useEffect,useState} from 'react';
import axios from 'axios';
function Bardata(authid)
{
    const [data,setData] = useState([]);
    const myauthid = authid;

    useEffect(()=>{

        axios.get(`http://localhost:8080/getView/${myauthid}`).then((res)=>{

        //console.log(res.data);
        setData(res.data);

        }).catch((err)=>{

            alert(err);
        });

    },[])

    return data;
}

export default Bardata;