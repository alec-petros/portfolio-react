import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  render() {

    return (
      <div className="header">
        <div className="btn btn-home" onClick={() => this.props.history.push('/')}>
          <span className="btn-text">Home</span>
        </div>
        <div className="btn btn-resume" onClick={() => this.props.history.push('/resume')}>
          <span className="btn-text">Resume</span>
        </div>
        <div className="btn btn-projects" onClick={() => this.props.history.push('/projects')}>
          <span className="btn-text">Projects</span>
        </div>
        <div className="btn btn-bio" onClick={() => this.props.history.push('/bio')}>
          <span className="btn-text">Bio</span>
        </div>
        <div className="btn btn-music" onClick={() => this.props.history.push('/music')}>
          <span className="btn-text">Music</span>
        </div>
        <div className="btn btn-blog" onClick={() => window.location = 'https://medium.com/@alecpetros'}>
          <span className="btn-text">Blog</span>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
