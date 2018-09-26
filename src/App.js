import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AddEvent from './components/AddEvent';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';
import Home from './components/Home';

class App extends Component {
  constructor(){
    super()
    this.state = {
        stateArray: []
    }
  } 

componentDidMount() {
    this.pullFromAPI();
}

pullFromAPI = () => {
    // return fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    return fetch('http://localhost:8080/rest/users/all')

    .then(response => response.json())
    .then(stateArray => this.setState({stateArray}))
}

doSomething = () => {
  console.log('doSomething reached')
    console.log(this.state.stateArray)
}

stuff(){
  console.log('stuff reached')
}

  render() {
    return (
      <div className="">
        <Header />
        <main>
          <Router>
          
            <div id='formComponent'>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#"><Link to="/home">Home</Link> <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/read">View</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/add">Add Event</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/update">Edit Event</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/delete">Delete Event</Link></a>
                </li>
              </ul>
              {/* <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
              </form> */}
            </div>
          </nav>


              {/* <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/read">View</Link>
                </li>
                <li>
                  <Link to="/add">Add Event</Link>
                </li>
                <li>
                  <Link to="/update">Edit Event</Link>
                </li>
                <li>
                  <Link to="/delete">Delete Event</Link>
                </li>
              </ul> */}

              <hr />
              <Route path="/home" component={Home} />
              <Route exact path="/read" render={(props) => <Read event={this.state.stateArray} />}/>
              <Route path="/add" render={(props) => <AddEvent pullFromAPI={this.pullFromAPI} />}/>
              <Route path="/update" component={Update} />
              <Route path="/delete" render={(props) => <Delete pullFromAPI={this.pullFromAPI} />}/>
            </div>
          </Router>
        </main>  
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
