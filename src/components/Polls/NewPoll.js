/**
 * Created by jonlazarini on 20/05/17.
 */
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import {styles} from './styles';


let i = 3

export default class NewPoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addNewPoll = this.props.addNewPoll;
    }

    handleInputChange(e) {
        //e.target & e.target.value & e.target.name
        const { target } = e;
        const { value, name } = target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        const { name, description } = this.state;
        // const {uid} = this.props.auth;
        // const uid = true ? 'firstUser' : Math.floor(Math.random() * 1000 );
        let author = 'user1';
        let id = `poll${i++}`;
        this.addNewPoll(e, name, description, author, id);
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
