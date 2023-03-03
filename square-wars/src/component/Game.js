import React from 'react'
import "./game.css"
const Game = () => {
  return (
    <>
      <section className='main-section'>
        <h1>Welcome to SquareWar</h1>
        <div className='game-section'>
          <div className='divider'>
            <div className='team-name'>
              <h3 className='h3'>Team1</h3>
            </div>
          </div>
          <div className='divider'>
            <div className='team-name'>
              <h3 className='h3'>Team2</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Game;