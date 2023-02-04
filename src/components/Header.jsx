import React from 'react';
import '../App.scss';

class Header extends React.Component {
    
    render () {
    
    return (
        <>
        <div>
            <a href="https://shaksphere.au" target="_blank">
            <img 
            loading="lazy" 
            src={'../assets/images/shaksphere.jpeg'} 
            className="logo"
            alt="Shaksphere logo" 
            />
            </a>
        </div>
        <div>
        <a href="Contact">
        <img 
            loading="lazy" 
            width={1200} 
            src={'../assets/images/banner1.png'}
            className='banner' 
            alt='banner'
        />
        </a>
        </div>
        
        </>

            )
                }
                                        }

export default Header;