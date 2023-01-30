import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
     <div>
        <a href="https://shaksphere.au" target="_blank">
          <img src="assets/images/shaksphere.jpg" className="logo" alt="Shaksphere logo" />
        </a>
      </div>
      <div>
      <img width={1200} src="assets/images/banner1.png" className='banner' alt='banner'/>
      <h1>My Portfolio</h1>
      </div>

      <div>
      <divider>_____________________________</divider>       
      <span className="read-the-docs"> 
      <h1>
            Currently Under Construction      </h1>
            <img src="assets/images/construction.png" className='constructionimg' alt='under construction'/>
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

    </div>

    
  )
}

export default App

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
