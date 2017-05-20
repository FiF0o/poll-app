/**
 * Created by jonlazarini on 20/05/17.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Polls} from '../components/Polls';


const mapStateToProps = (state) => {
    return {
        polls: state.polls,
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickBtn() {
            return () => console.log('func fired!');
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Polls);