import React, { Component } from "react";

import './PageHeader.css'

export default class PageHeader extends Component {
    constructor(props) {
        super(undefined);

        this.state = {
            content: props.content,
            title: props.title
        }
    }

    render() {
        return (
            <div className="PageHeaderContainer">
                <div className="PageHeaderTitle">
                    {this.state.title}
                </div>
                <div className="PageHeaderDescriptionSection">
                    {this.state.content}
                </div>
            </div>
        )
    }
}