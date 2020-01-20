import React, { Component } from 'react'
import "../card-style.css";


const Card = props => {
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src= {props.imgsrc} alt = "donut" className='card-img-top'/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondary">
                    Test
                </p>
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>
            </div>
        </div>
    );
}
export default Card;