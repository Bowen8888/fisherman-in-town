import React, {Component} from "react";
import PageHeader from "./PageHeader";

import './Skills.css'

export default class Housing extends Component {
    render() {
        return (
            <div className="SkillsContainer">
                <PageHeader
                    title="Housing"
                    content="As you upgrade your houses, you will have benefit on the amount of energy gained per sleep.
                     However, the cost of maintenance can also increase."
                />
            </div>
        )
    }
}