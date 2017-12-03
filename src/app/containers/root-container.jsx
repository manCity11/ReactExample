import React, { Component } from 'react';
import ChildComponent from './child-container.jsx';

export default class RootContainer extends Component {
    constructor(props) {
        super(props);
        this.children = ['Data 1', 'Data 2', 'Data 3'];
    }
    
    render() {
        return (
            <div>
                <p>Hello World!!!</p>
                <p>Today is : {this.props.now}</p>
                {this.children.map(child => <ChildComponent key={child.toString()} data={child}/>)}
            </div>
        );
    }
}