import React from "react";

const LiIcom = () =>{
    return(
        <figure className='absolute left-0 stroke-dark'>
            <svg width="75" height="75" 
            viewBox='0 0 100 100'>
                <circle cx="75" cy="50" r="20" 
                className='stroke-primary stroke-1 fill-none'/>
                <circle cx="75" cy="50" r="20" 
                className=' stroke-1 fill-light'/>
                <circle cx="75" cy="50" r="10" 
                className=' stroke-1 fill-primary'/>
            </svg>
        </figure>
        )
}

export default LiIcom