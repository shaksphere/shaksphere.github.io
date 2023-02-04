import React from 'react';
import '../App.scss';

function Construction() {
    return (
    <div>
      <article className="read-the-docs"> 
      <h1> Portfolio Still Under Construction      </h1>
        <img loading='lazy' 
        src={'assets/images/construction.png'} className='constructionimg' alt='under construction'/>
        <article className='coming-soon-card'>
        <div className="row">
        <div className="column">
        <img loading='lazy' 
              src={'assets/images/coming-soon.png'} className='coming-soon' alt='coming soon image'/>
        </div>
        <div className="column">
        <h1 className='comingsoon-h1'>Look out for more projects to be added to My Portfolio soon!</h1>
        </div>
        </div>
        </article>
      </article>

     
      </div>  
    )
}

export default Construction