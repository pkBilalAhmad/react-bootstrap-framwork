import React, { Component } from 'react';
import Main from './connectter/reactComponents/front'
import Navbar from './connectter/reactComponents/navbar'
import Signup from './connectter/reactComponents/signup'
class App extends Component {
    render() {
        return (
            <div>
                <Signup/>

                {/*<Navbar/>
                <Main/>*/}
            </div>
        );
    }
}

export default App;