// import React, { Component } from 'react';
// import '../stylesheets/pricebreakers-styles.css' stylesheet not importing.

class PriceBreakersModal extends React.Component {
  constructor(props) {
    super(props)
  } 
  state = { show: false};

  showModal = () => {
    this.setState({ show: true});
  };

  hideModal = () => {
    this.setState({show: false});
  };

  render() {
    return(
      <div className='pricebreakers-section'>
        <div className='pricebreakers-container'>
          <div className='pricebreakers-box'>
            <div className='pricebreakers-promo-wrapper'>
              <div className='pricebreakers-sizing'>
                <div className='new-tag'>New</div>
                  <div className='pricebreakers-main-wrapper'>
                    <div className='pricebreakers-header-flex'>
                      <div className='pricebreakers-header'>Introducing <span>Pricebreakers</span></div>
                        <button type='button' className='search-pricebreakers'>Search Pricebreakers</button>
                    </div>
                    <div className="icon-container">
                      <img src='/images/pricebreakers-img1.png' className='img1' alt='hotel building icon'/>
                      <img src='/images/pricebreakers-img2.png' alt='hotel building icon with thumbs up'/>
                      <img src='/images/pricebreakers-img3.png' alt='door handle icon'/>
                    </div>
                    </div>

              </div>
            </div>
          </div>
        </div>          
      </div>
    )
  }
}

// export default PriceBreakersModal;