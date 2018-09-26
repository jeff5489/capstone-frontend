import React, { Component } from 'react';

// import '../App.css';

class Delete extends Component { 
  constructor(props){
    super();
    this.state = {
      id: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
} 

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state.id)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('delete submit button was clicked')

    const url = 'http://localhost:8080/rest/users/' + this.state.id
    const otherPram = {
      headers:{
        "content-type":"application/json; charset=UTF-8"
      },
      // body:JSON.stringify(this.state),
      method:"DELETE"
    }
    fetch(url, otherPram)
    .then(data=>{return data.json()})
    .then(res=>{this.props.pullFromAPI()})
    .catch(error=>console.log(error))
  }  


  render() {
    return (
      <div id='formComponent' className='border whiteBackground'>
        <h3 className='center-text'>Delete event</h3>
        <div className='formContainer'>
          <form onSubmit={this.handleSubmit}>
            Id Number: <br/>
            <input class="form-control form-control-lg" type="text" name="id" onChange={this.handleChange} placeholder="" id="inputLarge"/><br/>
            {/* <input type="text" name="id" onChange={this.handleChange} /> <br/><br/> */}
            <div className='formContainer'>
              <input type='submit'className='btn btn-primary'/>
            </div><br/>
            
        </form>
        </div>
        
      </div>
    );
  }
}

export default Delete