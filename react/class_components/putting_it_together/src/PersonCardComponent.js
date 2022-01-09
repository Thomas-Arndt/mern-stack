import React, { Component } from 'react';

class PersonCard extends Component{

    constructor(props){
        super(props);
        const {firstName, lastName, age, hairColor} = props;
        this.state = { 
            age: age
        };
        this.firstName=firstName;
        this.lastName=lastName;
        this.hairColor=hairColor;
    }

    birthday = () => {
        let age = this.state.age;
        age++;
        this.setState({ age: age });
    }

    render(){
        return(
            <div>
                <h2>{this.lastName}, {this.firstName}</h2>
                <h4>Age: {this.state.age}</h4>
                <h4>Hair Color: {this.hairColor}</h4>
                <button onClick={ this.birthday }>A Very Merry Birthday!</button>
            </div>
        );
    }


}

export default PersonCard;