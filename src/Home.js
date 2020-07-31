import React, {Component} from "react";

import Card from './Card';
import Header from './Header'

import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="HomeContainer">
                <Header/>
                <div className="CardsSection">
                    <Card name="Skills"
                          description="Your sources of income."
                          link="/skills"
                          imgPath='/images/Skills.png'>
                    </Card>
                    <Card name="Activity"
                          description="Have fun!"
                          link="/skills"
                          imgPath='/images/Activity.png'>
                    </Card>
                    <Card name="Aquarium"
                          description="View your fishes."
                          link="/aquarium"
                          imgPath='/images/Aquarium.png'>
                    </Card>
                    <Card name="Equipment"
                          description="View your equipments."
                          link="/skills"
                          imgPath='/images/Equipment.png'>
                    </Card>
                    <Card name="Food"
                          description="Source of energy."
                          link="/food"
                          imgPath='/images/Food.png'>
                    </Card>
                    <Card name="Housing"
                          description="Where you live."
                          link="/skills"
                          imgPath='/images/Housing.png'>
                    </Card>
                </div>

                <div className="HomeFooter">
                    Contact us : fisherman.in.town@gmail.com |
                    <a href="https://fisherman-in-town.flycricket.io/privacy.html"
                       target="_blank"
                       className="HomeFooter">
                        Privacy Policy
                    </a>
                </div>
            </div>
        )
    }
}