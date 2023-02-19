import React, { useState } from 'react'
import './style.css';

type GemaMenuProps = {
    visible: boolean;
    steVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GemaMenu({steVisible, visible}: GemaMenuProps) {
    
  return (
    <div className='game-menu'>
        <div className='buttonMenu' onClick={() => steVisible(!visible)}>+</div> 
        
    </div>
  )
}
