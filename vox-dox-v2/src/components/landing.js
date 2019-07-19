import React, { Component } from 'react'
import Header from './Header';
import Signup from './sign-up'
import LoginForm from './login-form'
import Navbar from './navbar'
import Form from './Form';
import Present from './Present';
import TapeDeck from './TapeDeck/'


class Landing extends Component {
    constructor() {
        super()
    }

    render() {   
        return (
            <div>
                <Header></Header>
                <div className="content">
                <Form />
                <Present /> 
                <TapeDeck />
                </div>
            </div>
        )
    }
}

export default Landing

