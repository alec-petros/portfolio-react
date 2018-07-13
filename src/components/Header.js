import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  render() {

    return (
      <div className="header">
        <div className="btn btn-home" onClick={() => this.props.history.push('/')}>
          Home
        </div>
        <div className="btn btn-projects" onClick={() => this.props.history.push('/projects')}>
          Projects
        </div>
        <div className="btn btn-bio">
          <Link className="btn-text" to="/bio">Bio</Link>
        </div>
        <div className="btn btn-music">
          <Link className="btn-text" to="/music">Music</Link>
        </div>
        <div className="btn btn-blog">
          <Link className="btn-text" to="/blog">blog</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
