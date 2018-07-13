import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header'
import Projects from './components/Projects'
import Bio from './components/Bio'
import Blog from './components/Blog'
import Music from './components/Music'
import Resume from './components/Resume'
import { withRouter } from 'react-router-dom';
import './styles/css/main.css';

class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
