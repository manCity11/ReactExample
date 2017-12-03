import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ChildComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Child component</p>
                <p>Data : {this.props.data}</p>
            </div>
        );
    }
}

// require that data property should be a string
ChildComponent.propTypes = {
    data: PropTypes.string.isRequired
};