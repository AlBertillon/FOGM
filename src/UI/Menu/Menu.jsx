import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export const Menu = ({header, items, active, setActive}) => {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(!active)}>
        <div className='blur'/>
        <div className="menu__content" onClick={(e) => e.stopPropagation()}>
            <div className="menu__header">{header}</div>
            <ul>
                {items.map(el => 
                    <li  key={el.id}>
                        <Link to={el.href}>{el.title}</Link>
                    </li>   
                    )}
            </ul>
        </div>
    </div>
  )
}
