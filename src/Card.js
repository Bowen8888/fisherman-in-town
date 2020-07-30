import React, { Component } from "react";
import './Card.css';
import {Link} from 'react-router-dom'
export default class Card extends Component {
    constructor(props) {
        super(undefined);

        this.state = {
            name : props.name,
            description: props.description,
            link: props.link,
            imgPath: props.imgPath
        };
    }

    render() {
        return (
            <div className = "CardContainer">
                <div className = "FeatureContainer">
                    <img className="CardIcon" src={process.env.PUBLIC_URL + this.state.imgPath} alt=""/>
                    <div> 
                        {this.state.name}
                    </div>
                    <div>
                        {this.state.description}
                    </div>
                    <Link to={this.state.link}>Details...</Link>
                </div>
            </div>
        )
    }
}