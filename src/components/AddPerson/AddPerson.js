import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        namePers: '',
        agePers: 0
    }

    nameChangedHandler = (event) => {
        this.setState({namePers: event.target.value});
    }

    ageChangedHandler = (event) => {
        this.setState({agePers: event.target.value});
    }

    render () {
        return (
            <div className="AddPerson">
                <input type="text"   placeholder="Name" onChange={this.nameChangedHandler} value={this.state.namePers} ></input>
                <input type="number" placeholder="Age" onChange={this.ageChangedHandler} value={this.state.agePers} ></input>
                <button onClick={() => this.props.personAdded(this.state.namePers, this.state.agePers)}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;

/* const addPerson = (props) => (
    <div className="AddPerson">
        <input type="text"   placeholder="Name"></input>
        <input type="number" placeholder="Age"></input>
        <button onClick={props.personAdded}>Add Person</button>
    </div>
); */

// export default addPerson;