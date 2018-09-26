import React, { Component } from 'react';
import snowMoon from '../Assets/snowMoon.jpeg'
// import '../App.css';

class Home extends Component { 
    
  render() {
    return (
      <div id='formComponent' className='border whiteBackground'>
        {/* <h3 className='center-text'>Home Page</h3> */}
        <h3 className='center-text'>Welcome to Life Events.</h3>
        <p>This is a platform where you can store your most significant life events. Like going on a skiing trip.</p>
        <div id='homeContainer'>
          <img class="card-img-top" alt='img' id='snowMoon' src={snowMoon}></img>  
        </div>
        
        <p>To start, click the Add Event link above.</p>
        <p>To see your life events, click the Read link above.</p>
      </div>
    );
  }
}

export default Home