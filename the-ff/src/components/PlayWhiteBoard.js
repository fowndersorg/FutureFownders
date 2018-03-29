
import React from 'react';
import PlayVideo from '../components/PlayVideo';

const PlayWhiteBoard = () => {
  return (
    <section className="bg home-bg10" id="PlayWhiteBoard">
      <div className="container pd-6">
        <div className="row">
          <div className="col s12 left-align">
          <h2 className="black-text">Play White Board</h2>
          <p className="col s12 black-text flow-text"> Future Fownders is an immersive program 
          Our offering spans the realm of product-based businesses, foundational business theory as well as core intangible requirements for entrepreneurs like leadership, teamwork 
          </p>
          </div>
        </div>
        <PlayVideo/>
      </div>
    </section>
  )
}
export default PlayWhiteBoard;
