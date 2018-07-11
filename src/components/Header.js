import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="btn btn-home">
          <Link className="btn-text" to="/">Home</Link>
        </div>
        <div className="btn btn-projects">
          <Link className="btn-text" to="/projects">Projects</Link>
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
