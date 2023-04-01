import React from 'react';
import { Navigate } from 'react-router-dom';


function ContactDemoButton () {
  const [GoToContactDemo, setGoToContactDemo] = React.useState(false);
 
  if (GoToContactDemo) {
    return <Navigate to="/contactdemo" />;
    }

  return (
  <div>
    <h3>Contact Demo Page</h3>
      <button ClassName="outline" onClick={() => { 
        setGoToContactDemo(true); 
        }}
        >
          {" "}
          Go To Contact Demo App
          </button>
    </div>
  );
}

export default ContactDemoButton;
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
