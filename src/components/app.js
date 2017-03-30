import React, { Component } from 'react';
import Main from './connectter'
import Navbar from './connectter/navbar'
class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Main/>
            </div>
        );
    }
}

export default App;