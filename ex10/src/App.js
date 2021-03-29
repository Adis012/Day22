import React, { Component } from 'react';
import Box from './Box';


class App extends Component {
    render() {
        return (
        <div >This is a {props.size}px Box!</div>
        )
    }
}

export default App;