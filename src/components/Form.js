/**
 * Created by jonlazarini on 25/04/17.
 */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { database } from '../database/firebase';

const styles = {
    form: {
        textAlign: 'center'
    },
    fields: {
        marginRight: '20px'
    }
};


export default class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: null,
            description: null
        };

        this.dataRef = null;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(e) {
        const { target } = e;
        // give same name fields for our states for simplicity when referencing them below
        const { value, name } = target;

        this.setState({
            // access computed values to set our state with field values depending on field names
            [name]: value
        });
    }

    handleSubmit(e) {
        this.dataRef = database.ref();
        e.preventDefault();

        const submittedForm = {...this.state}; // reference to all the form fields in the state - flattened
        this.dataRef.child('polls').push({...submittedForm}); // sends the whole form destructured to have it flat and not nested under submittedForm
    }

    render() {

        return(
            <form style={styles.form} onSubmit={this.handleSubmit}>
                <TextField
                    name="name"
                    floatingLabelText="Your new poll"
                    type="text"
                    onChange={ this.handleInputChange }
                    style={styles.fields}
                />
                <TextField
                    name="description"
                    floatingLabelText="Enter a short description"
                    type="text"
                    onChange={ this.handleInputChange }
                    style={styles.fields}
                />
                <FlatButton
                    label="Submit"
                    type="submit"
                />
            </form>
        )
    }
}
