import React, { Component } from 'react';

// import '../App.css';

class AddEvent extends Component { 
  constructor(props){
    super();
    this.state = {
      title: '',
      description: '',
      date: '',
      imgUrl: ''
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
    console.log(JSON.stringify(this.state))


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
    .then(res=>{this.props.pullFromAPI()})
    .catch(error=>console.log(error))
  }
    
  render() {
    return (
      <div id='formComponent' className='border whiteBackground'>
        <h3 className='center-text'>Add event</h3>
        <div className='formContainer'>

        <div class="form-group">
          {/* <label class="col-form-label col-form-label-lg" for="inputLarge">Large input</label> */}
          {/* <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="inputLarge"/> */}
        </div>
          <form onSubmit={this.handleSubmit}>
              Title: <br/>
              <input class="form-control form-control-lg" type="text"name="title" onChange={this.handleChange} placeholder="" id="inputLarge"/><br/>
              {/* <input type="text" name="title" onChange={this.handleChange}/> <br/> */}
              Date: <br/>
              <input class="form-control form-control-lg" type="date" name="date" onChange={this.handleChange} placeholder="" id="inputLarge"/><br/>
              {/* <input type="date" name="date" onChange={this.handleChange}/> <br/> */}
              Image URL: <br/>
              <input class="form-control form-control-lg" type="text" name="imgUrl" onChange={this.handleChange} placeholder="" id="inputLarge"/><br/>
              {/* <input type="text" name="imgUrl" onChange={this.handleChange}/> <br/> */}
              Event Summary:<br/>
              <textarea class="form-control form-control-lg" type="text" name="description" onChange={this.handleChange} placeholder="" id="inputLarge"/><br/>
              {/* <textarea type="text" name="description" onChange={this.handleChange} /><br/><br/> */}
              <div className='formContainer'>
                <input type='submit'className='btn btn-primary'/>
              </div><br/>
          </form>
        </div>
      </div>
    );
  }
}

export default AddEvent