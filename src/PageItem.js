import React, { Component } from "react";

import './PageItem.css'

export default class PageItem extends Component {
    constructor(props) {
        super(undefined);

        this.state = {
            content: props.content,
            title: props.title,
            imgPath: props.imgPath
        }
    }

    render() {
        return (
            <div className="PageItemContainer">
                <div className="PageItemTitle">
                    {this.state.title}
                </div>
                <img className="PageItemIcon" src={process.env.PUBLIC_URL + this.state.imgPath} alt=""/>
                <div className="PageItemDescriptionSection">
                    {this.state.content}
                </div>
            </div>
        )
    }
}