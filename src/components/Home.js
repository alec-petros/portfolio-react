import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="heading">
          <div class="text-box">
            <h1 class="heading-primary">
              <span class="heading-primary-main">Alec Petros</span>
              <br />
              <span class="heading-primary-sub developer">Developer | </span>
              <span class="heading-primary-sub musician">Musician | </span>
              <span class="heading-primary-sub tinker">Tinker</span>
            </h1>
          </div>
          <div class="heading__img">
          </div>
        </div>
        <br />
        <div class="bio">
          <div class="bio-heading">
            <span>Welcome</span>
          </div>
          <br />
          <div class="bio-body">
            <p class="bio-body-p">  Nice to meet you. My name is Alec, and creating things is my passion. Whether it be music, art, web applications, furniture, electronics, or film, I'm here to create and help others create.</p>
            <br />
            <p class="bio-body-p">What you'll find here is a repository of my work, across many mediums. I've chosen to present it all in one place to paint a picture of the complete person, rather than just the developer, producer, or any other single label. I learned to code through making music, and I learned to produce through code. The line between mediums is blurry at best.</p>
            <br />
            <p class="bio-body-p">If you are curious about my work, would like to collaborate, or want to say hello, you can reach me by email at.</p>
          </div>

        </div>
      </div>
    )
  }
}

export default Home
