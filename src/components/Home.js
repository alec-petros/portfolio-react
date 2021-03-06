import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="heading">
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">Alec Petros</span>
              <br />
              <span className="heading-primary-sub developer">Developer | </span>
              <span className="heading-primary-sub musician">Musician | </span>
              <span className="heading-primary-sub tinker">Tinker</span>
            </h1>
          </div>
          <div className="heading__img">
          </div>
        </div>
        <br />
        <br />
        <div className="welcome-text">
          <div className="welcome-text-heading">
            <span>Welcome</span>
          </div>
          <br />
          <br />
          <div className="welcome-text-body">
            <p className="welcome-text-body-p">  Nice to meet you. My name is Alec, and creating things is my passion. Whether it be music, art, web applications, furniture, electronics, or film, I'm here to create and help others create.</p>
            <br />
            <p className="welcome-text-body-p">What you'll find here is a repository of my work, across many mediums. I've chosen to present it all in one place to paint a picture of the complete person, rather than just the developer, producer, or any other single label. I learned to code through making music, and I learned to produce through code. The line between mediums is blurry at best.</p>
            <br />
            <p className="welcome-text-body-p">If you are curious about my work, would like to collaborate, or want to say hello, you can reach me by email at <a className="email" href="mailto:alec@petros.audio">alec@petros.audio</a>.</p>
          </div>

        </div>
      </div>
    )
  }
}

export default Home
