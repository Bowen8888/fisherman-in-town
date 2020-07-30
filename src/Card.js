import React, { Component } from "react";
import './Card.css';

export default class Card extends Component {
    render() {
        return (
            <div className = "CardContainer">
                <div className = "FeatureContainer">
                    <div> 
                        Name
                    </div>
                    <div>
                        Description
                    </div>
                </div>
            </div>
        )
    }
}