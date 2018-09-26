import React, { Component } from 'react';

// import '../App.css';

class Update extends Component { 
    
  render() {
    return (
      <div id='formComponent' className='border whiteBackground'>
        <h3 className='center-text'>Edit event</h3>
        <div className='formContainer'>
          <form>
            {/* Id Number: <br/>
            <input type="text" name="id" /> <br/> */}
            Title: <br/>
            <input type="text" name="title" /> <br/>
            {/* Image Url: <br/>
            <input type="text" name="lastname" /><br/> */}
            Event Summary:<br/>
            <textarea type="text" name="summary" /><br/><br/>
            <div className='formContainer'>
              <input type='submit'/>
            </div>
            
            
          </form>
        </div>
        
      </div>
    );
  }
}

export default Update