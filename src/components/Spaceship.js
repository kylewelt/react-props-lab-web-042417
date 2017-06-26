import React from 'react'

class Spaceship extends React.Component {
  render () {
    return (
      <div className='spaceship'>
        <h1>{this.props.name}</h1>
        <p>
          <strong>Speed: </strong>{this.props.speed}
        </p>
        <p>
          <strong>Weaponry: </strong>{this.props.hasRockets ? 'rockets' : 'lasers'}
        </p>
        <p>
          <strong>Colors: </strong>
          {this.props.colors.join(', ')}
        </p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship
