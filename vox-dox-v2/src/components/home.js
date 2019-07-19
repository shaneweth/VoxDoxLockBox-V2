import React, { Component } from 'react'
import Header from './Header';
import Form from './Form';
import Present from './Present';
import TapeDeck from './TapeDeck/'

class Home extends Component {
    constructor() {
        super()
    }

    render() {   
        return (
            <div>
                <Header></Header>
                {/* <div className="content">
                <Form />
                <Present /> 
                <TapeDeck />
                </div> */}
            </div>
        )
    }
}

export default Home