import React from 'react';
import { Button } from 'reactstrap';

export default class NewarkSchoolVideo extends React.Component {
  render() {
    return (
      <div  className="btn.brand-blue">
        <form  className="btn.brand-blue" action="https://www.youtube.com/embed/8r6OyGO0mOg?ecver=2" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick"/>
                <input type="hidden" name="hosted_button_id" value="RLME4T28HXER4"/>
                <input type="submit" value="PLAY" name="submit" title="Future Fownders at Newark's East Side High" className=" btn brand-blue"/>
                <img  alt="" border="0" src="https://drive.google.com/file/d/12PSBugefaLvOPnAAvS9IQU4VQosa6VzF/view?usp=sharing" width="1" height="1" />
            </form>
      </div>
    );
  }
}


