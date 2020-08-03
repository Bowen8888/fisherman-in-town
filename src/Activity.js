import React, {Component} from "react";
import PageHeader from "./PageHeader";

import './Skills.css'
import PageItem from "./PageItem";

export default class Activity extends Component {
    render() {
        return (
            <div className="SkillsContainer">
                <PageHeader
                    title="Activity"
                    content="Activities can help you to maintain your health and other status."
                />

                <PageItem
                    title="Bar"
                    content="It opens from 18:00 to 3:00. You can socialize in the bar and for each visit, some event will be triggered.
                    An event can affect your happiness."
                    imgPath="/images/Bar.png"/>

                <PageItem
                    title="Stroll"
                    content="Have a walk on the street and do something randomly. Anything can happen with this activity."
                    imgPath="/images/Stroll.png"/>

                <PageItem
                    title="Hospital"
                    content="You will be diagnosed. When a disease is diagnosed, a cure will be offered with a price."
                    imgPath="/images/Hospital.png"/>

                <PageItem
                    title="Investment"
                    content="From time to time, there will be businesses available for you to do investment. However,
                    it is not guarantee to make a profit."
                    imgPath="/images/Investment.png"/>
            </div>
        )
    }
}