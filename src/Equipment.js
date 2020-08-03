import React, {Component} from "react";
import PageHeader from "./PageHeader";

import './Skills.css'
import PageItem from "./PageItem";

export default class Equipment extends Component {
    render() {
        return (
            <div className="SkillsContainer">
                <PageHeader
                    title="Equipment"
                    content="Each skill except for hand gathering requires a starting equipment. Some skills have more
                    equipment upgrades available. For each upgrade, the probability or amount of catch increases. Then,
                    if the max upgrade is reached, a special buff might be unlocked."
                />
            </div>
        )
    }
}