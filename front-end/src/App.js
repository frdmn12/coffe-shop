import React, { Component } from 'react';
import { LandingPage} from './pages'
import {Route} from "react-router-dom"
// import {NavBar} from './components'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        {/* <NavBar/> */}
        <Route path="/" exact component={LandingPage}/>
      </div>
     );
  }
}
 
export default App;