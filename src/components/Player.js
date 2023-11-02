import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Player({el}) {
  return (
    <div className='cards'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.Image} style={{ width: "18rem" , height:"30rem"}} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
         {el.team}<br></br>
         {el. nationality}<br></br>
         {el. jerseyNumber}<br></br>
         {el. age}<br></br>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> 
    </div>
  )
}

export default Player