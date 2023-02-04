import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Support from './components/Support';
import './App.scss';
import { Divider } from '@mui/material';
import Portfolio from './portfolio/Portfolio';
import About from './about/About';
import Contact from './contact/Contact';
import Header from './components/Header';
import Attribution from './components/Attribution';
// import Modals from './components/Modals';
// import ListCast from './components/ListCast';


function App() {
  const [cast, setCast] = useState([]);
  const [memberInfo, setMemberInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('cast.json');
        setCast(await response.json());
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // async function fetchCast() {
  //   const response = await fetch('cast.json');
  //   setCast(await response.json());
  // }

  // useEffect(() => {
  //   fetchCast();
  // });
 
  //const [count, setCount] = useState(0)
  return (
    <>
    <section id="home">
    <div className="App">

    <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />

      <Header />
      <section id="about">
      <About />
      </section>
      <section id="portfolio">
      <Portfolio />
      </section>
      {/* <div className="container">
      <hgroup>
          {/* { <h1>Welcome!</h1> }  } 
          <ListCast cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
          {memberInfo && (
          <Modals 
            member={memberInfo} 
            handleChange={(info) => { 
              setMemberInfo(cast[info]); 
            }} 
            handleClose={() => { 
              setMemberInfo(null); 
            }} 
            />
          )}
      </hgroup>
      </div>  */}
      <Divider orientation="vertical" flexItem> </Divider>        
      
      {/* <Construction /> */}
      <section id="contact">

      <Contact />
      </section>
      <Divider orientation="vertical" flexItem> </Divider>        
      
      <Attribution />

      <Support />
      </div>
      </section>
    </>
  )
}

export default App

   /* <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/portfolio' element={<Portfolio/>} />

    </Routes> */

/*<Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
     <div>
        <a href="https://shaksphere.au" target="_blank">
          <img loading="lazy" 
          src={'assets/images/shaksphere.jpg'} className="logo" alt="Shaksphere logo" />
        </a>
      </div>
      <div className="container">
      <hgroup>
          <h1>Navigation Options</h1>
          <h3><br/>Choose Menu Item<br/></h3>
          <ListCast cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
          {memberInfo && <Modals member={memberInfo} handleChange={(info) => { setMemberInfo(cast[info]) }} handleClose={() => { setMemberInfo(null) }} />}
          <Support />
      </hgroup>
      </div>
    */

/*

function App() {
  const [count, setCount] = useState(0)
  
   <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      */
