import React, {Component} from "react";
import PageHeader from "./PageHeader";

import './Skills.css'
import PageItem from "./PageItem";

export default class ComingUps extends Component {
    render() {
        return (
            <div className="SkillsContainer">
                <PageHeader
                    title="Sell all fishes"
                    content="A button that allows you to sell all you fishes at once."
                />

                <PageHeader
                    title="Food price title"
                    content="A label that says the right column is price."
                />

                <PageHeader
                    title="Food sort"
                    content="Food will be sorted by price."
                />

                <PageHeader
                    title="Dying alert"
                    content="You will receive an alert when your character is about to die."
                />

                <PageHeader
                    title="Tutorial"
                    content="We will include game tutorials."
                />
            </div>
        )
    }
}