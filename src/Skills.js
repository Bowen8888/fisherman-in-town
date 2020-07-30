import React, {Component} from "react";
import PageHeader from "./PageHeader";
import PageItem from "./PageItem";

import './Skills.css'

export default class Skills extends Component {
    render() {
        return (
            <div className="SkillsContainer">
                <PageHeader
                    title="Skills"
                    content="The character is a fisherman, so all sources of income are related to fish selling.
                    Fishes have different qualities, and can be sold for different prices.
                    There are different fishing methods provided to obtain fish.
                    Each method has a proficiency level that increases as the player plays, and the catching chances and
                    fish quality will increase accordingly."
                >

                </PageHeader>

                <PageItem
                    title="Hand gathering"
                    content="Using hand to catch fish. This method is hard to master, but it is the cheapest. You don't need any
                equipment, but you need to spend lots of energy."
                    imgPath="/images/HandGathering.png"/>

                <PageItem
                    title="Spear fishing"
                    content="You need a spear in order to do spear fishing. A spear is affordable with few money. Although spear
                fishing is tiresome, the quality of fishes is better than hand gathering."
                    imgPath="/images/SpearFishing.png"/>

                <PageItem
                    title="Net fishing"
                    content="Net fishing requires a net. This method requires energy and time, however, you can get a large amount of
                fishes as the skill levels up."
                    imgPath="/images/NetFishing.png"/>

                <PageItem
                    title="Rod fishing"
                    content="You need a rod. A rod can be very expensive, however, you do not need to use as much energy as the other
                methods, and the chances of catching high quality fishes are higher than spear and hand. This is the
                first fishing method that requires bait. Fisherman can buy baits using money."
                    imgPath="/images/RodFishing.png"/>

                <PageItem
                    title="Trap fishing"
                    content="You can set traps. The fisherman does not need to spend time in the process, so that he can do something
                else in the meanwhile. It can also catch a large amount of fishes. This method also requires bait."
                    imgPath="/images/TrapFishing.png"/>

                <PageItem
                    title="Boat fishing"
                    content="Once the fisherman is rich enough to buy a boat, he can hire other fisherman to work for him. At this
                stage, the fisherman is like a small patron. This method also requires bait."
                    imgPath="/images/BoatFishing.png"/>

                <PageItem
                    title="Farming"
                    content="If the fisherman eventually becomes a tycoon, he can purchase a fish farm and breed the fishes. Farming
                consumes bait proportional to the amount of fish owned."
                    imgPath="/images/Farming.png"/>

            </div>
        )
    }
}