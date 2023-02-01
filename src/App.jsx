import React, { useEffect, useState } from 'react';
import ListCast from './components/ListCast';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import Modals from './components/Modals';
import Nav from './components/Nav';
import Support from './components/Support';
import './App.scss';
import {Routes, Route} from 'react-router-dom'

function App() {
  const [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });
 
  //const [count, setCount] = useState(0)
  return (
    <>
    <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
    {/* <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/portfolio' element={<Portfolio/>} />

    </Routes> */}

    <div className="App">
     <div>
        <a href="https://shaksphere.au" target="_blank">
          <img loading="lazy" 
          src={'assets/images/shaksphere.jpg'} className="logo" alt="Shaksphere logo" />
        </a>
      </div>
      <div className="container">
      <hgroup>
          {/* <h1>Welcome!</h1> */}
          <ListCast cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
          {memberInfo && <Modals member={memberInfo} handleChange={(info) => { setMemberInfo(cast[info]) }} handleClose={() => { setMemberInfo(null) }} />}
      </hgroup>
      </div>

      <div>
      <img loading="lazy" width={1200} 
      src={'assets/images/banner1.png'} className='banner' alt='banner'/>
      <h1>My Portfolio</h1>
      </div>

      <div>
      <divider>_____________________________</divider>       
      <span className="read-the-docs"> 
      <h1>
            Currently Under Construction      </h1>
            <img loading='lazy' 
            src={'assets/images/construction.png'} className='constructionimg' alt='under construction'/>
            </span>
      </div>  
      <divider>_____________________________</divider>        
      <div>
        <h2 className="attributions">
          {' '}Built with:     </h2>
        <a href="https://vitejs.dev/" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Support />
      </div>
    </>
  )
}

export default App



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
