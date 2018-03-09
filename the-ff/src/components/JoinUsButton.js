// Import donate button
import React from 'react';
import { Button } from 'reactstrap';

const JoinUsButton = () => {
  return (
    <div className="joinUsButtonBox">
      <Button className="joinUsButton" color="primary">JOIN US</Button>{''}
      <Button className="btn-secondary">LEARN MORE</Button>{''}
    </div>
  )
}

export default JoinUsButton;