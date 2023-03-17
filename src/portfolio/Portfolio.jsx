import React from 'react';
import './Portfolio.scss';
import pythonLogo from '../assets/python.png';
import githubLogo from '../assets/github.png';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg'; 
import Construction from '../components/Construction';
import PayrollSlider from './PayrollSlider';
import { PayrollSliderData } from './PayrollSliderData';
import DirectorySlider from './DirectorySlider';
import { DirectorySliderData } from './DirectorySliderData';
import bitbucketLogo from '../assets/bitbucket.png';
import fitbitLogo from '../assets/fitbit.svg';

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
        <section id="js">
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <img className="tech-n-tools" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

          <h2> <br />HTML / CSS / JavaScript Projects  <br /> </h2>
          </section>
          <section className="project-tools">

          <h3 className="attributions-h3">Project: 'Pizza Deal Calculator' </h3>

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
          <div className="well">
          <a href="https://stunning-dodol-be62f5.netlify.app/" target="_blank">
              <img loading='lazy' 
              src={'assets/images/pizzasonly.png'} className='pizzasonly' alt='PO Logo'/>
          </a>
          <footer className='gh-source'>This is a custom Logo -
          <br></br> Click the logo or the button to see the demo</footer>
          </div>
          </div>
          <div className="column">
          <div className="well">
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
        </div>
        </article>  
        
        {/* Python Projects  */}
        {/* Project 1  */}
        <article className="portfolio-one"> 
        <div>
          <section id="python">
          <img src={pythonLogo} className="logo react" alt="python logo" />
          <h2> Python Projects  <br /> </h2>
          <h3 className="attributions-h3"> Project: 'Random Numbers Guessing Game' </h3>
          </section>
          <section className="project-tools" id="python">
          {/*<h3 className="attributions-h3">
            This project was built using:     </h3>*/}
                       <p className='proj-one-p'> This is a simple guessing game created from specifications given for a TAFE Project.</p>

            <iframe src="https://replit.com/@ShakeelAbbas/Random-Number-Game?embed=true" width="600" height="400" />
            <br />
            <p className='proj-one-p'>Click 'Run' above to see how this works, or click 'Show files' to view the source code.</p>
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

        {/* C#  */}

        {/* Project 1  */}
        <article className="portfolio-one"> 
        <div>
        <section id="csharp">
        <img className="logo react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
          <h2> C# Projects  <br /> </h2>
          <h3 className="attributions-h3"> Project: 'Payroll Calculator - WPF' </h3>
          <h4>Screenshots:</h4>
          <p className='proj-csharp-p'>Click right and left to see more screenshots.</p>
          <br />
          <div>
          <PayrollSlider slides={PayrollSliderData} />
          </div>
        </section>
          {/*<img src={payrollScreenshot} className="payrol-ss" alt="wpf app ss" />
          <img src={payrollScreenshot} className="payrol-ss" alt="wpf app ss" />
          <img src={payrollScreenshot} className="payrol-ss" alt="wpf app ss" />
          <img src={payrollScreenshot} className="payrol-ss" alt="wpf app ss" /> */}

          <section className="project-tools">
          {/*<h3 className="attributions-h3">
            This project was built using:     </h3>*/}
                       <p className='proj-csharp-p'> <strong><br /> <br />Decription: <br /><br /></strong>The Employee Pay Calculator is an application that allows you to read an employee details file, 
                                                  calculate the weekly pay, tax, and superannuation for an employee, given their hourly rate and hours worked, 
                                                  and save the payslip to a new file, meeting your requirements for a pay calculator application. <br /><br />
                                                  This was completed as a project for a Object-Oriented Programming unit at TAFE NSW.</p>

            <a href="https://github.com/shaksphere/pay_calculator_wpf" target="_blank">
            <img src={githubLogo} className="github-repo-one" alt="po-project" />
            </a>
            <footer className='gh-source'>Source Code</footer>
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

        {/* Xamarin Forms */}

        {/* Project 1  */}
        <article className="portfolio-one"> 
        <div>
        <section id="xamarin">
        <img className="logo react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original-wordmark.svg" />
          <h2> Xamarin.Forms Projects - Mobile (Android)  <br /> </h2>
          <h3 className="attributions-h3"> Project: 'Staff Directory App' </h3>
          <h4>Screenshots:</h4>
          <p className='proj-csharp-p'>Click right and left to see more screenshots. </p>
          <DirectorySlider slides={DirectorySliderData} />
          </section>

          {/*<img src={payrollScreenshot} className="payrol-ss" alt="wpf app ss" />
          <img src={payrollScreenshot} className="payrol-ss" alt="wpf app ss" />
          <img src={payrollScreenshot} className="payrol-ss" alt="wpf app ss" />
          <img src={payrollScreenshot} className="payrol-ss" alt="wpf app ss" /> */}

          <section className="project-tools">
          {/*<h3 className="attributions-h3">
            This project was built using:     </h3>*/}
                       <p className='proj-xam-p'> <strong><br /> <br />Decription: <br /><br /></strong>
                       A mobile application created for a TAFE project to provide a Staff contact directory. This will provide a staff listing and manage the contact information 
                       of people who work within the company.
                       <br/> <br/>
The contact management mobile application should allow staff to:

          </p>
<div className='xam-div'>
<ul>
          <li >See a listing of all company staff profiles</li>
          <li>Select a staff profile to view staff profile details</li>
          <li>Allow staff profiles to be added or updated.</li>

</ul>
<p className='proj-xam-p'><br/>Things learned during this project: </p>
<ul>
        <li>Requirement Analysis</li>
        <li>UI Prototyping</li> 
        <li>Remote DB access - SQ Lite</li>
        <li>VCS Interactions</li>
        <li>Android App Deployment</li>
        



</ul>
</div>


            <a href="https://bitbucket.org/shakeelabbastafensw/roistaffdirectoryshakeelabbas/src/master/" target="_blank">
            <img src={bitbucketLogo} className="bb-repo-one" alt="bb-project" />
            </a>
            <footer className='gh-source'>Source Code</footer>
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

          {/* Python Projects  */}
        {/* Project 1  */}
        <article className="portfolio-one"> 
        <div>
          <section id="fitbit">
          <a target="_blank" href="https://icons8.com/icon/60614/fitbit">
          <img src={fitbitLogo} className="logo react" alt="fitbit logo" />
          </a> 
          <h2> Fitbit Fun  <br /> </h2>
          <h3 className="attributions-h3"> Project: 'Make it Count!' </h3>
          </section>
          <section className="project-tools" id="python">
          {/*<h3 className="attributions-h3">
            This project was built using:     </h3>*/}
                       <p className='proj-one-p'> This is a simple shot tracker for basketball which is used to count makes/misses and shooting percentage.</p>

                       <iframe width="560" height="315" src="https://www.youtube.com/embed/u-51VLDjLO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br />
            <p className='proj-one-p'>Click the 'play' button above to see a demo of how this works</p>
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