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
    }
};


export default class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newData: null
        };

        this.dataRef = null;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        // update newData
        const newData = e.target.value;
        this.setState({ newData });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newData = this.state.newData;
        this.dataRef = database.ref();
        // sends to database
        this.dataRef.child('polls').push({name: newData});
    }

    render() {

        return(
            <form style={styles.form} >
                <TextField
                    floatingLabelText="Floating Label Text"
                    type="text"
                    onChange={ this.handleChange }
                />
                <FlatButton
                    label="Submit"
                    onTouchTap={ this.handleSubmit }
                />
            </form>
        )
    }
}
