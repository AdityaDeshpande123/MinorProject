
// Import the styles
import React, { useEffect, useState, useRef } from 'react';

import * as htmlToImage from 'html-to-image';

function Viewblog(props) {
    const domEl = useRef(null);
    const downloadImage = async () => {
        const dataUrl = await htmlToImage.toPng(domEl.current);
        console.log()
        // download image
        const link = document.createElement('a');
        link.download = "html-to-img.png";
        link.href = dataUrl;
        link.click();
    }

    return (

        <>
            <div >
                <h3 style={{color:"white"}}>Convert HTML element or document into Image in React</h3>
                <h3><a href="https://www.cluemediator.com/" target="_blank" rel="noopener">Clue Mediator</a></h3>


            </div>

            <button onClick={downloadImage}>Submit</button>

        </>


    )


}


export default Viewblog;