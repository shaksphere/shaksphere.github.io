import React from 'react';
import './Portfolio.scss';
import pythonLogo from '../assets/python.png';
import githubLogo from '../assets/github.png';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg'; 
import Construction from '../components/Construction';

class Portfolio extends React.Component {
  render () {
    return ( 
    <>
      {/* <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} /> */}
      <div className="Portfolio">
        <article className="portfolio-one"> 
        <div>
        <h1>My Portfolio</h1>

        {/* HTML/ JS/ CSS  */}
        {/* Project 1  */}

        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

          <h2> <br />HTML / CSS / JavaScript Projects  <br /> </h2>
  
          <section className="project-tools">
          <h3 className="attributions-h3">Project 1: 'Pizza Deal Calculator' </h3>

          <h3 className="attributions-h3">
            This project was built using:     </h3>
          {/*<a href="https://vitejs.dev/" target="_blank">*/}
            <img src={viteLogo} className="logo vite" alt="Vite logo" />
          {/*</a>*/}
          {/*<a href="https://reactjs.org" target="_blank">*/}
            <img src={reactLogo} className="logo react" alt="React logo" />
          {/*</a>*/}
          </section>
        </div>
        <div className="row">
          <div className="column">
          <a href="https://stunning-dodol-be62f5.netlify.app/" target="_blank">
              <img loading='lazy' 
              src={'assets/images/pizzasonly.png'} className='pizzasonly' alt='PO Logo'/>
          </a>
          <footer className='gh-source'>This is a custom Logo -
          <br></br> Click the logo or the button to see the demo</footer>

          </div>
          <div className="column">
          <p className='proj-one-p'> A web application which calculates the best deal combination based on the number of pizza
          which I created for a TAFE project and have since updated using Vite, React and picocss/Sass     </p>
          <a href="https://stunning-dodol-be62f5.netlify.app/" target="_blank">
          <button className="proj-one-button">View a demo</button>
          </a>
          <a href="https://github.com/shaksphere/pizzaorderform" target="_blank">
            <img src={githubLogo} className="github-repo-one" alt="po-project" />
          </a>
          <footer className='gh-source'>Source Code</footer>
        </div>
        </div>
          
        </article>
        
        {/* Python Projects  */}
        {/* Project 1  */}
        <article className="portfolio-one"> 
        <div>
          <img src={pythonLogo} className="logo react" alt="python logo" />
          <h2> Python Projects  <br /> </h2>
          <h3 className="attributions-h3"> Project 1: 'Random Numbers Guessing Game' </h3>
          <section className="project-tools">
          {/*<h3 className="attributions-h3">
            This project was built using:     </h3>*/}
                       <p className='proj-one-p'> This is a simple guessing game created from specifications given for a TAFE Project.</p>

            <iframe src="https://replit.com/@ShakeelAbbas/Random-Number-Game?embed=true" width="600" height="400" />
            <p className='proj-one-p'><br />Click 'Run' above to see how this works, or click 'Show files' to view the source code.</p>
          </section>
        </div>
                  {/* Project 2 
        <div>
          <h3 className="attributions-h3"> Project 2: 'Random Numbers Guessing Game' </h3>
          <section className="project-tools">
         
                       <p className='proj-one-p'> This is a simple guessing game created from specifications given for a TAFE Project.</p>

            <iframe src="https://replit.com/@ShakeelAbbas/Random-Number-Game?embed=true" width="600" height="400" />
            <p className='proj-one-p'><br />Click 'Run' above to see how this works, or click 'Show files' to view the source code.</p>
          </section>
        </div>
         */}
        </article>

      </div>
      <Construction />
      </>
            )

    }
  }

export default Portfolio;



// function Portfolio() {
    // const [cast, setCast] = useState([]);
    // const [memberInfo, setMemberInfo] = useState(null);
  
    // useEffect(() => {
    //   async function fetchData() {
    //     try {
    //       const response = await fetch('cast.json');
    //       setCast(await response.json());
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    //   fetchData();
    // }, []);

    

// export default Portfolio

// ReactDOM.render(
//     <React.StrictMode>
//         <h1>My Portfolio</h1>
//         <p>Portfolio coming soon!</p>
//         <article className="portfolio-one"> 
//         <h1> Currently Under Construction      </h1>
//             <img loading='lazy' 
//             src={'assets/images/construction.png'} className='constructionimg' alt='under construction'/>
//       </article>
//     </React.StrictMode>,
//     document.getElementById('root')
// )