import React from 'react'

let Image = (props) =>{
    return(
        <div className="image-container">
            <img className="image-children" src={props.src} alt={props.alt}></img>
        </div>
    )
}

export default Image