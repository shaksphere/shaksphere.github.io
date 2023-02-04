import React from 'react';
import '../App.scss';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
class Attribution extends React.Component {
    
    render () {
    
    return (
        <>
        <div>
        <h2 className="attributions">
          This Portfolio Was Built With:     </h2>
        <a href="https://vitejs.dev/" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </div>
        
        </>

            )
                }
                                        }

export default Attribution;