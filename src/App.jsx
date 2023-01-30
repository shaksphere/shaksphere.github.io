import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div>
        <a href="https://shaksphere.au" target="_blank">
          <img src="/dist/images/shaksphere.jpg" className="logo" alt="Shaksphere logo" />
        </a>

        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
      <img width={1200} src="/dist/images/banner1.png" className='banner' alt='banner'/>
      <h1>My Portfolio</h1>
      </div>

   
      <h2 className="read-the-docs">
          Under Construction      </h2>
          <img src="/dist/images/construction.png" className='constructionimg' alt='under construction'/>


    </div>
  )
}

export default App

/*
   <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      */
