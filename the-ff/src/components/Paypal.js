import React from 'react';

const Paypal = () => {
  return (
    <div className="PaypalBox">

                  <div className="col s12 m3 center-align">
                       <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" >
                           <input type="hidden" name="cmd" value="_s-xclick"/>
                           <input type="hidden" name="hosted_button_id" value="PSYQQ5MTVCUS6"/>
                           <input type="submit" value="$25" name="submit" title="PayPal - The safer, easier way to pay online!" className="btn-large cta-blue"/>
                           <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                       </form>
                   </div>
                   <div className="col s12 m3 center-align">
                       <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                           <input type="hidden" name="cmd" value="_s-xclick"/>
                           <input type="hidden" name="hosted_button_id" value="YC2JZRWCLS9BE"/>
                           <input type="submit" value="$50" name="submit" title="PayPal - The safer, easier way to pay online!" className="btn-large cta-blue"/>
                           <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                       </form>
                   </div>
                   <div className="col s12 m3 center-align">
                       <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                           <input type="hidden" name="cmd" value="_s-xclick"/>
                           <input type="hidden" name="hosted_button_id" value="G8NM3M3ZNWFWS"/>
                           <input type="submit" value="$100" name="submit" title="PayPal - The safer, easier way to pay online!" className="btn-large cta-blue"/>
                           <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                       </form>
                   </div>
                   <div className="col s12 m3 center-align">
                       <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                           <input type="hidden" name="cmd" value="_s-xclick"/>
                           <input type="hidden" name="hosted_button_id" value="RLME4T28HXER4"/>
                           <input type="submit" value="Enter Amount" name="submit" title="PayPal - The safer, easier way to pay online!" className="btn-large cta-blue"/>
                           <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                       </form>
                   </div>
          </div>
  
  )
}

export default Paypal;