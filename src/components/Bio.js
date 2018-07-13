import React from 'react';
import Selfie from '../img/selfie.png'

class Bio extends React.Component {
  render () {
    return (
      <div className="bio">
        <div className="bio-img-container">
          <img src={Selfie} className="bio-img" />
        </div>
        <br />
        <br />
        <div className="welcome-text">
          <div className="welcome-text-heading">
            <span>Bio</span>
          </div>
          <br />
          <br />
          <div className="welcome-text-body">
            <p className="welcome-text-body-p">~bio goes here~</p>
            <br />

          </div>
        </div>
      </div>
    )
  }
}

export default Bio
