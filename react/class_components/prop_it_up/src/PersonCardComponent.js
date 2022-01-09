import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <div className="fit-content">
                <h2>{lastName}, {firstName}</h2>
                <h4 className="text-start">Age: {age}</h4>
                <h4 className="text-start">Hair Color: {hairColor}</h4>
            </div>
        );
    }
}

export default PersonCard;