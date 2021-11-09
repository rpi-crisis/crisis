import React, { FC } from "react";
import './tag.css';

const Tag: FC<{name:string, remove:(name:string)=>void}> = ({name,remove}) => {
  const click =  ():void => {
    remove(name);
  }

  return (
    <div className='tag' onClick={click}>
      {name}
      <div className='remove'>
        <div id="l"></div>
        <div id="r"></div>
      </div>
    </div>
  );
}
export default Tag;
