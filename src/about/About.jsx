import React from 'react';
import '../portfolio/Portfolio.scss';


class About extends React.Component {
  render () {

    return ( 
    <>
    <article className="about-card"> 
    <div className="row">
        <div className="column">
        <h1>About Me</h1>
        <p className="aboutme-p">I'm a Sydney-based Programmer who recently made a big leap, since June 2022 I have been dedicated to gaining experience in Xamarin.Forms, HTML/JS/CSS, React, ViteJS, Sass, Python, C# and more. </p>
        <p className="aboutme-p">Learning new technologies excite me and finding solutions to problems is exhilarating, I am looking to take my development skills to the next level by finding a role where I can contribute to a team, as well as having some light guidance from an experienced mentor and team.</p>
        </div>
        <div className="column-tech">
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original-wordmark.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />

        
        
        </div>
        </div>
    </article>
        

     </>
            )

    }
  }

export default About;