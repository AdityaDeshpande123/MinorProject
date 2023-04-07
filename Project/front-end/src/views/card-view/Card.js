import React from 'react';
import imgUrl from '../../static/bg1.jpeg'
import styles from './Card.module.css'
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

                <h3 >{title}</h3>
            </div>


            <div className='body-container'>
                <p>{Body}</p>
            </div>

        </div>

    );
}


export default Card;