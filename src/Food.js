import React, {Component} from "react";
import PageHeader from "./PageHeader";

import './Skills.css'

export default class Food extends Component {
    render() {
        return (
            <div className="SkillsContainer">
                <PageHeader
                    title="Food"
                    content="There are 4 types of food: fruit, drink, meal and snacks.
                    You cannot eat the same type of food within some period of time depending on the type.
                    Your satiety, sleepiness, energy level and happiness might increase or decrease
                    depending on the food you consume."
                />
            </div>
        )
    }
}