import React,{Component} from 'react';
import NavBar from './Components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom'; //Router configuration -- wrap the component with the BrowserRouter tag and use the Route path to specify the route location
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Route path='/Contact' component={Contact}/>  
      <Route exact path='/' component={Home}/>
      <Route path='/About' component={About}/>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
