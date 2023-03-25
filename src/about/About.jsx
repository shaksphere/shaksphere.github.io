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
        <p className="aboutme-p">I'm a Sydney-based Software Engineer who has been dedicated to gaining experience in HTML/JS/CSS, 
        React, ViteJS, Sass, Python, C#, Xamarin.Forms, Maui, and more since June 2022.  </p>
        {/*<p className="aboutme-p">Learning new technologies excite me and finding solutions to problems is exhilarating, I am looking to take my development skills to the next level by finding a role where I can contribute to a team, as well as having some light guidance from an experienced mentor and team.</p>*/}
        <p className="aboutme-p">I'm a mature minded candidate who is passionate about learning and building on my solid foundations. 
        I have a demonstrated ability to work as part of a team, as well as leading teams and mentoring others in previous roles. 
        I see every new experience as a valuable opportunity to challenge myself and help your business grow.</p>

        </div>
        <div className="column-tech">
        <div className="well">
        <a href="#js">
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        </a>
        <a href="#csharp">
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />
        </a>
        <a href="#xamarin">
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original-wordmark.svg" />
        </a>
        <a href="#python">
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        </a>
        <a href="#fitbit">
        <img className="tech-n-tools" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMGJjZDYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIyIDNBMyAzIDAgMSAwIDIyIDkgMyAzIDAgMSAwIDIyIDN6TTIyLjAwNCAxMS41QTIuOTk2IDMgMCAxIDAgMjIuMDA0IDE3LjUgMi45OTYgMyAwIDEgMCAyMi4wMDQgMTEuNXpNMzEuNDk1IDIwLjVBMy40OTUgMy41IDAgMSAwIDMxLjQ5NSAyNy41IDMuNDk1IDMuNSAwIDEgMCAzMS40OTUgMjAuNXpNNDIuMDA3IDIwLjAwMjAwMDAwMDAwMDAwMkEzLjk5MyAzLjk5OSAwIDEgMCA0Mi4wMDcgMjggMy45OTMgMy45OTkgMCAxIDAgNDIuMDA3IDIwLjAwMjAwMDAwMDAwMDAwMnpNMzEuNTA1IDExQTMuNDk1IDMuNSAwIDEgMCAzMS41MDUgMTggMy40OTUgMy41IDAgMSAwIDMxLjUwNSAxMXpNMzEuNTA1IDMwQTMuNDk1IDMuNSAwIDEgMCAzMS41MDUgMzcgMy40OTUgMy41IDAgMSAwIDMxLjUwNSAzMHpNMjEuOTk2IDMwLjVBMi45OTYgMyAwIDEgMCAyMS45OTYgMzYuNSAyLjk5NiAzIDAgMSAwIDIxLjk5NiAzMC41ek0yMS45OTggMzguOTY0QTMuMDAzIDMuMDE4IDAgMSAwIDIxLjk5OCA0NSAzLjAwMyAzLjAxOCAwIDEgMCAyMS45OTggMzguOTY0ek0yMi4wMDQgMjAuOTY0QTIuOTk2IDMgMCAxIDAgMjIuMDA0IDI2Ljk2NCAyLjk5NiAzIDAgMSAwIDIyLjAwNCAyMC45NjR6TTEzLjUgMjEuNUEyLjUgMi41IDAgMSAwIDEzLjUgMjYuNSAyLjUgMi41IDAgMSAwIDEzLjUgMjEuNXpNMTMuNSAzMUEyLjUgMi41IDAgMSAwIDEzLjUgMzYgMi41IDIuNSAwIDEgMCAxMy41IDMxek0xMy41IDEyQTIuNSAyLjUgMCAxIDAgMTMuNSAxNyAyLjUgMi41IDAgMSAwIDEzLjUgMTJ6TTYgMjJBMiAyIDAgMSAwIDYgMjYgMiAyIDAgMSAwIDYgMjJ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD4KPC9zdmc+"/>
        </a>
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
        </div>
        </div>
        </div>
    </article>
        

     </>
            )

    }
  }

export default About;