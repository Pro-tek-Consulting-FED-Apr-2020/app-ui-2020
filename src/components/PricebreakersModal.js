// import React, { Component } from 'react';
// import '../stylesheets/pricebreakers-styles.css' stylesheet not importing.

class PriceBreakersModal extends React.Component {
  constructor(props) {
    super(props)
  } 










  render() {
    return(
      <div className='pricebreakers-container'>
        <div className='new-tag'>New</div>
          <div className='pricebreakers-header'>Introducing <span>Pricebreakers</span></div>
        <button className='search-pricebreakers'>Search Pricebreakers</button>
        <img src='/images/pricebreakers-img1.png' className='pricebreaker-img1' alt='hotel building icon'/>
        <img src='/images/pricebreakers-img2.png' alt='hotel building icon with thumbs up'/>
        <img src='/images/pricebreakers-img3.png' alt='door handle icon'/>

          
      </div>
    )
  }
}

// export default PriceBreakersModal;