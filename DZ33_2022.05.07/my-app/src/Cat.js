import { Component, Fragment } from "react";
import React from "react";
export default class Cat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: ['https://ichef.bbci.co.uk/news/640/cpsprodpb/12CBE/production/_117309967_neo4_976.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Hermitage_cat.jpeg/800px-Hermitage_cat.jpeg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQ7JV3JuSlIaQSRRQkWkN_v7BaDUNomGZnnEX4fOcYrngXYUuF0eZBskGjjF2zrkQUow&usqp=CAU']
        }

    }
    render() {
        const cats = this.state.cats;
        return (
            <Fragment>
                <li>
                    {<img src={cats[this.props.data]}></img>}
                </li>
            </Fragment>
        )

    }
} 