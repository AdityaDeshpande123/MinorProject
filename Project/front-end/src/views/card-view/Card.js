import React from 'react';
import imgUrl from '../../static/bg1.jpeg'
import './Card.css'
function Card()
{
    let title = "Image";
    let Body = "This is the body of the message";
    

    return(

        <div className='card-container'>

            <div className='image-container'>

                <img src ={imgUrl} alt='image'></img>
            </div>

            <div className='title-container'>

                <h2>{title}</h2>
            </div>


            <div className='body-container'>
                <p>{Body}</p>
            </div>





        </div>



    );
}


export default Card;