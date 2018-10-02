import React, { Component } from 'react';

class Read extends Component { 
    
  render() {
    let viewItems;
    if(this.props.event){
      viewItems = this.props.event.map(event => {
        return (
            <div className='border'>
              <div class="card text-white bg-secondary mb-3">
                <div class="card-body">
                  <div class='formContainer'>
                    <img id='photo' alt='img' src={event.imgUrl}></img>
                  </div>
                  <p class="card-text">
                  {JSON.stringify(event.title)}</p> 
                  <p class="card-text">
                  {JSON.stringify(event.date)}</p>
                  <p class="card-text">
                  {JSON.stringify(event.description)}</p>
                </div>
              </div>
            </div>
        )
      })
    }

    return (
      <div id='readComponent' className='whiteBackground'>
        {viewItems}
      </div>
    );
  }
}

export default Read