import React, { Component } from 'react';

// import '../App.css';

class Read extends Component { 
    
  render() {
    let viewItems;
    if(this.props.event){
      viewItems = this.props.event.map(event => {
        return (
            <div className='border'>
              <div class="card text-white bg-secondary mb-3" 
              // style="max-width: 20rem;"
              >
                {/* <div class="card-header"><h3 className='center-text'>Event</h3></div> */}
                <div class="card-body">
                  {/* <h4 class="card-title">Secondary card title</h4> */}
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <div class='formContainer'>
                    <img id='photo' alt='img' src={event.imgUrl}></img>
                  </div>
                  <p class="card-text">ID: {JSON.stringify(event.id)}</p>
                  <p class="card-text">Title: {JSON.stringify(event.title)}</p>
                  <p class="card-text">Date: {JSON.stringify(event.date)}</p>
                  {/* <p class="card-text">Image: {JSON.stringify(event.imgUrl)}</p> */}
                  {/* {console.log(event.imgUrl)} */}
                  <p class="card-text">Description: {JSON.stringify(event.description)}</p>
                </div>
              </div>



              {/* <h3 className='center-text'>Event</h3> */}
              {/* <p>ID: {JSON.stringify(event.id)}</p>
              <p>Title: {JSON.stringify(event.title)}</p>
              <p>Date: {JSON.stringify(event.date)}</p>
              <p>Image: {JSON.stringify(event.imgUrl)}</p>
              <p>Description: {JSON.stringify(event.description)}</p> */}
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