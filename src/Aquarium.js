import React, {Component} from "react";
import PageHeader from "./PageHeader";

import './Skills.css'

export default class Aquarium extends Component {
    render() {
        return (
            <div className="SkillsContainer">
                <PageHeader
                    title="Aquarium"
                    content="Aquarium is the place where you can keep your fishes. Once fishes are caught, they are
                     directly put into the Aquarium. Aquarium have capacity,
                    once your capacity is reached, you need either to increase it or sell your fish,
                    so that you can catch new fishes. Fishes have different rarity colors: white, yellow, green, blue,
                     purple, orange and red. The fish selling prices depends on the rarity levels.
                      For fishes under color green, you can sell them directly, otherwise
                      you need to find buyers from the market. Market buyers will change from hour to hour and so do
                      the prices."
                />
            </div>
        )
    }
}