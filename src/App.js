import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
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
    // console.log('componenetDidMount reached')
    this.pullFromAPI();
}

pullFromAPI = () => {
    // console.log('pullFromAPI reached')

    // return fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    return fetch('http://localhost:8080/rest/users/all')

    .then(response => response.json())
    .then(stateArray => this.setState({stateArray}))
    // .then(console.log('doSomething about to go'))
    // .then(this.doSomething)
    // .then(() => console.log(this.state.stateArray))

}

doSomething = () => {
  console.log('doSomething reached')
  // window.setTimeout(stuff, 2000);
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
          {/* <Read event={this.state.stateArray} /> */}
          {/* <AddEvent /> */}
          {/* <Update /> */}
          {/* <Delete /> */}

          <Router>
            <div id='formComponent'>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/read">Read</Link>
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
              </ul>

              <hr />

            <Route exact path="/read"  
                render={(props) => <Read event={this.state.stateArray} />}
              />
              <Route path="/home" component={Home} />
              <Route path="/add" component={AddEvent} />
              <Route path="/update" component={Update} />
              <Route path="/delete" component={Delete} />
            </div>
          </Router>
        </main>  
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
