import React, { Component } from 'react'
import Card from './cardUI'
import img1 from "../assets/donut.jpg";

export default class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc = {img1}/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc = {img1}/>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc = {img1}/>
                    </div>
                </div>
            </div>
        )
    }
}