class PriceBreakersModal extends React.Component {
  constructor(props) {
    super(props)
  } 

  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  //modal rendering here
  renderPriceBreakerModal() {
    return (
      <main>
        <h1>PriceBreakers Modal</h1>
      </main>
    )
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
                        <button type='button' className='search-pricebreakers' onClick={this.showModal}>Search Pricebreakers</button>
                    </div>
                    <div className="icon-container">
                      <div className='img1-container'>
                        <img src='/images/pricebreakers-img1.png' className='img1' alt='hotel building icon'/>
                        <div className='caption-img1'>See 3 popular hotels at a heavily discounted price</div>
                      </div>
                        <div className="img2-container">
                          <img src='/images/pricebreakers-img2.png' className="img2" alt='hotel building icon with thumbs up'/>
                          <div className="caption-img2">Click choose and we'll pick one of the 3 hotels</div>
                        </div>
                        <div className='img3-container'>
                          <img src='/images/pricebreakers-img3.png' className='img3' alt='door handle icon'/>
                          <div className='caption-img3'>See which hotel right after you book!</div>
                        </div>
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
