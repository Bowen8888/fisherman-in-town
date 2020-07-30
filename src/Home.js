import React, { Component } from "react";

import Card from './Card';
import Header from './Header'

import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="CardsSection">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        )
    }
}