import { Component } from'react';

import {Route,Switch} from "react-router-dom"

import Home from "./components/Home"
class App extends Component{


  render(){
  return(
   
    <Switch>

    <Route exact path="/" component={Home} />

    </Switch>

  


  )
}
}


export default App;