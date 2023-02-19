import React from 'react'
import './BurgerBtn.css'

type BurgerBtnProps = {
  active: boolean
  setActive: (active: boolean) => void;
}

export default function BurgerBtn({active, setActive}: BurgerBtnProps) {
  return (
    <nav>
      <div 
      className={active ? 'menu-btn open' : 'menu-btn'}
      onClick={() => setActive(!active)}>
        <div className='menu-btn__burger'/>
      </div>
    </nav>
  )
}
