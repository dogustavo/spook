import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import Create from './createUser';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            success: false
        }
    }

    render() {
        const {
            loading,
            success
        } = this.state;

        const props = {
            loading,
            success
        };

        return(
            <Create {...props}/>
        );
    }
}

export default Register;