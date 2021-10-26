import React, { FC } from "react";
import './card.css';

const Card: FC<{head:string}> = ({head}) => {
  return (
    <div className='card'>
      <div>
        {head}
      </div>
    </div>
  )
}

export default Card;
