import React from "react";

const Card = (props) => {
    return (
        <td className="Card">
            <img src={props.image} alt='image'></img>
            <div className='container'>
                <h2>{props.title}</h2>
                <a href={props.link} target="_blank"><button class="button-8" role="button">Buy it</button></a>
            </div>
            
        </td>
    )
}

export default Card;