import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <div> 
                <img alt="DP" src={`https://robohash.org/${this.props.uname}`}></img>
                <h3>{this.props.name}</h3>
            </div>
        );
    }
}

export default Card;