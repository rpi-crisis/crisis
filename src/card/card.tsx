import React, { FC, useRef } from "react";
import './card.css';

const Card: FC<{head:string, content:string}> = ({head,content}) => {
  return (
    <div className='card'>
      <div className='head'>
        {head}
      </div>
      <div className='content'>
        {content}
      </div>
    </div>
  )
}

export default Card;
