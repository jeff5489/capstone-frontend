import React, { Component } from 'react';

// import '../App.css';

class Read extends Component { 
    
  render() {
    let viewItems;
    if(this.props.event){
      viewItems = this.props.event.map(event => {
        return (
            <div className='border'>
              <h3 className='center-text'>Event</h3>
              {/* <p>ID: {JSON.stringify(event.id)}</p> */}
              <p>Title: {JSON.stringify(event.title)}</p>
              <p>Description: {JSON.stringify(event.description)}</p>
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