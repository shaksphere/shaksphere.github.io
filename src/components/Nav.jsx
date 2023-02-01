import "./Nav.scss";


export default ({ cast, onChoice }) => {
    return (
      <nav className="container">
        <ul>
          <li>
            <details role="list">
              <summary aria-haspopup="listbox" role="link">Go to</summary>
              <ul role="listbox">
                {cast.map(member => (
                  <li key={member.id}>
                    <a onClick={() => { onChoice(member) }}
                      data-tooltip={member.name}>{member.name}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>

        <div className='menu'></div>
                  <ul className='hidden md:flex'>
                  <li>
                  <a href='/'>Home</a>
                  </li>
                  <li>
                  <a href='/about'>About</a>
                  </li>
                  <li>
                  <a href='/contact'>Contact</a>
                  </li>
                  <li>
                  <a href='/portfolio'>Portfolio</a>
                  </li>
                    </ul>
                  
      </nav>
    )
  }