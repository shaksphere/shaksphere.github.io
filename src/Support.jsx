import { useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import React from 'react';
const pageTitle = document.title;


export default () => {
  const [count, setCount] = useState(0)
  count

  useEffect(() => {
    count && (document.title = `${pageTitle} - ${count}`);
  })
    /*if (count >  0) {
      document.title = `${pageTitle}--${count}`;
    }
  })*/
  return (

  <button className="outline" onClick={()=> setCount(count + 1)}>
    {count === 0 ? "My job is to count clicks": ` I've been clicked ${count} times (ouch!)`}

      </button>
     

  )
}
/*
<button className="outline" onClick={()=> setCount(count + 1)}>
     {(() => {
        if (count === 0) {
          return "Click to support";
          
        } else {
          return `Supported ${count} times`;
        }
      })()}
      </button>*/
