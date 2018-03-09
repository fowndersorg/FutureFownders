import React from 'react';
import PlayVideo from '../components/PlayVideo';

const PlayTable = (props) => {
  return (
    <div className="playTableBox">
          <h1 className="playTableTitle">Play Table</h1>
          <p className="playTablePhrase">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d
          </p>
          <p className="playTableTxt">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc
          </p>
          <PlayVideo/>

    </div>
  );
};

export default PlayTable;


