import React, { Component } from 'react';

// import '../App.css';

class Delete extends Component { 
    
  render() {
    return (
      <div id='formComponent' className='border whiteBackground '>
        <h3 className='center-text'>Delete event</h3>
        <div className='formContainer'>
          <form>
            Id Number: <br/>
            <input type="text" name="id" /> <br/><br/>
            <div className='formContainer'>
              <input type='submit'/>
            </div>
            
        </form>
        </div>
        
      </div>
    );
  }
}

export default Delete