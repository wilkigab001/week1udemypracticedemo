import React from  'react';
import classes from './Card.module.css';

const Card = props => {
    return(
        //Can use props.className because that is what it is called in AddUser.js
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Card;