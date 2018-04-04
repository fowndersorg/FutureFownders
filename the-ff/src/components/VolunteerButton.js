import React from 'react';
import { Button } from 'reactstrap';

export default class VolunteerButton extends React.Component {
  render() {
    return (
      <div  className="btn.brand-blue">
        <form  className="btn.brand-blue" action="/volunteer/">
          <input type="submit" value="VOLUNTEER" name="submit" title="PayPal - The safer, easier way to pay online!" className=" btn brand-blue"/>
        </form>
      </div>
    );
  }
}


