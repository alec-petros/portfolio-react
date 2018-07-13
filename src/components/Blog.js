import React from 'react';

class Blog extends React.Component {

  componentWillMount() {
    // doesn't work, CORB error. Gonna wait till i set up my CMS to do OATH stuff.
    // fetch('https://medium.com/feed/@alecpetros')
    // .then(r => r.json())
    // .then(json => console.log(json))
  }

  render () {
    return (
      <div></div>
    )
  }
}

export default Blog
