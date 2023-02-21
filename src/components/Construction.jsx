import React from 'react';
import '../App.scss';

function Construction() {
    return (
    <div>
     {/*<article className='coming-soon-card'>
       <article className="read-the-docs"> 
       <h1> My Portfolio is a:      </h1>
       */}
        <article>
        <h1> My Portfolio is a:      </h1>

        <img loading='lazy' 
              src={'assets/images/wip-two.png'} className="wip-image" alt='wip image'/>
        <h3 className='h3-wip'><br></br>Look out for more projects to be added to My Portfolio soon!</h3>
        </article>
        </div>
        
      
        
    )
}

export default Construction

/* 
  {/*<img loading='lazy' 
        src={'assets/images/construction.png'} className='constructionimg' alt='under construction'/> }
        {/*<div className="row">
         </div>
         
        <div className="row">
                </div>
      }
*/