import React from 'react'
import Player from './Player'

function Playerlist({players}) {
  console.log({players});
  return (
    <div className='cards'>
{players.map((el)=><Player el={el} />)}
    </div>
  )
}

export default Playerlist