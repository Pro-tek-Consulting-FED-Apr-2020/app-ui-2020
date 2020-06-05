class SearchBox extends React.Component {
  state = {
    selected: 'HOTELS'
  }

  tabs = {
    'HOTELS': <HotelsSearchForm />,
    'FLIGHTS': null,
    'BUNDLE + SAVE': null,
    'CARS': null,
    'CRUISES': null
  }

  render() {
    let tabNames = Object.keys(this.tabs)

    return (<div className="mainContent">
      <div className="searchBox">
        {/* text above tabs */}
        <div className="top-color">
          <div className="searchBox-header1">Need a hotel or private rental?</div>
          <div className="searchBox-header2">Book a room with free cancellation for more flexibility</div>
          <hr className="horizontalLine1" />

          {/* tab names */}
          <div className="searchBox-tabs">
            {tabNames.map(key => <div key={key} className={"searchBox-tab" + (key === this.state.selected ? " selected" : "")} onClick={() => this.setState({ selected: key })}>{key}</div>)}
          </div>
          <hr className="horizontalLine2" />
        </div>


        {/* content of selected tab */}
        <div className="searchBox-content">
          {this.tabs[this.state.selected]}
        </div>
      </div>
    </div>)

  }
}
