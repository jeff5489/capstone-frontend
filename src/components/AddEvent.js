import React, { Component } from 'react';

// import '../App.css';

class AddEvent extends Component { 
  constructor(props){
    super();
    this.state = {
      title: '',
      description: ''
  }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit was clicked')

    const url = 'http://localhost:8080/rest/users/load'
    const otherPram = {
      headers:{
        "content-type":"application/json; charset=UTF-8"
      },
      body:JSON.stringify(this.state),
      method:"POST"
    }
    fetch(url, otherPram)
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
    .catch(error=>console.log(error))
  }
    
  render() {
    return (
      <div id='formComponent' className='border whiteBackground'>
        <h3 className='center-text'>Add event</h3>
        <div className='formContainer'>
          <form onSubmit={this.handleSubmit}>
              Title: <br/>
              <input type="text" name="title" onChange={this.handleChange}/> <br/>
              Event Summary:<br/>
              <textarea type="text" name="description" onChange={this.handleChange} /><br/><br/>
              <div className='formContainer'>
                <input type='submit'/>
              </div>
              
          </form>
        </div>
      </div>
    );
  }
}

export default AddEvent