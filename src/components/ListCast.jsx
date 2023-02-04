export default ({ cast, onChoice }) => {
    return (
      <div style={{
        display: "grid!important",
        gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))!important`,
        gap: `1rem!important`,
        marginBottom: '1rem!important'
      }}>
        {
          cast.map(member => (
            <a onClick={() => { onChoice(member) }} key={member.id} data-tooltip={member.name}> 
              <img src={`../assets/images/${member.slug}_tn.svg`} alt={member.name} />
            </a>
          ))
        }
      </div>
    )
  }