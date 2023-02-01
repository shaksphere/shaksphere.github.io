import { useState, useEffect} from 'react';
const pageTitle = document.title;

export default () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    count && (document.title = `${pageTitle} - ${count}`);
  })
    /*if (count >  0) {
      document.title = `${pageTitle}--${count}`;
    }
  })*/
  return (
  <button className="outline" onClick={()=> setCount(count + 1)}>
    {count === 0 ? "Click to support this project": `Supported ${count} times`}
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
