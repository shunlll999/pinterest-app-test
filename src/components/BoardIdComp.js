import React from 'react';

const BoardIdComp = ({boardData, onClick}) => (
  <div className="board-list__item">
    <img className="board-list__img" onClick={()=> onClick(boardData)} alt="pins" src={boardData.image.original.url}/>
  </div>
);

export default BoardIdComp;