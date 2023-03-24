import "./Nav.scss";



export default ({ cast, onChoice }) => {
  
    return (
      <nav className="container">
        <ul>
          <li>
            <details role="list">
              <summary aria-haspopup="listbox" role="link">Go to</summary>
              <ul role="listbox">
                  <li>
                  <a href='#home'>Home</a>
                  </li>
                  <li>
                  <a href='#about'>About</a>
                  </li>
                  <li>
                  <a href='#portfolio'>Portfolio</a>
                  </li>
                  <li>
                  <a href='#contact'>Contact</a>
              </li>
              <li>
                  <a href='#resume'>Resumé</a>
              </li>
              </ul>
            </details>
          </li>
        </ul>

        <div className='menu'></div>
                  <ul className='hidden md:flex'>
                    <li>
                    <a href='#home'>Home</a>
                    </li>
                    <li>
                    <a href='#about'>About</a>
                    </li>
                    <li>
                    <a href='#portfolio'>Portfolio</a>
                    </li>
                    <li>
                    <a href='#contact'>Contact</a>
                    </li>
                    <li>
                    <a href='#resume'>Resumé</a>
                   </li>
                  </ul>
                  
      </nav>
    )
  }