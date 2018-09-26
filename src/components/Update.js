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
            <input class="form-control form-control-lg" type="text"name="title" id="inputLarge"/><br/>

            {/* <input type="text" name="title" /> <br/> */}
            {/* Image Url: <br/>
            <input type="text" name="lastname" /><br/> */}
            Date: <br/>
            <input class="form-control form-control-lg" type="date" name="date" onChange={this.handleChange} placeholder="" id="inputLarge"/><br/>
            {/* <input type="date" name="date" onChange={this.handleChange}/> <br/> */}
            Image URL: <br/>
            <input class="form-control form-control-lg" type="text" name="imgUrl" onChange={this.handleChange} placeholder="" id="inputLarge"/><br/>
            Event Summary:<br/>
            <textarea class="form-control form-control-lg" type="text" name="summary" id="inputLarge"/><br/>
            {/* <textarea type="text" name="summary" /><br/><br/> */}
            <div className='formContainer'>
              <input type='submit'className='btn btn-primary'/>
            </div><br/>
            
            
          </form>
        </div>
        
      </div>
    );
  }
}

export default Update