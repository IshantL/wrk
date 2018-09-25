import React, { Component } from 'react';
import data from './sumry.json';
import './css/App.css';

class App extends Component {
  render() {
    const tileImage=data.tileimage;
    const profileImage=data.personaldata.image;
    const headerBgImage = require('./' + tileImage + '');
    const personalImage= require('./' + profileImage + '');

    return (
      <div className="App">
        <header className="App-header" style={{ backgroundImage: "url(" + headerBgImage + ")"}}>
        </header>
        <div className="App-section">
          <div className="App-section-container">
            <div className="App-section-container-photo">
            <img className="profilePic"  src={personalImage} alt={data.personaldata.name}></img>
            </div>
            <div className="App-section-container-profile">
              <h1>{data.personaldata.name}</h1>
              <h2>{data.personaldata.position}</h2>
              <p className="shortBio">{data.personaldata.shortbio}</p>
              <p className="location">{data.personaldata.location}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
