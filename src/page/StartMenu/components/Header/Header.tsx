import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BurgerBtn from '../../../../UI/BurgerBtn/BurgerBtn'
import { Menu } from '../../../../UI/Menu/Menu'
import './Header.css'



export default function Header() {
    const navList = [
        {id: 1, href: '/', title: 'Домашнияя страница'},
        {id: 2, href: '/plaingField', title: 'Игровое поле'},
        // {id: 3, href: '/sdfsdf', title: 'Третья Кнопка'},
    ]

  const [activeBtn, setActiveBtn] = useState(false)

  return (
    <div className='header'>
        <BurgerBtn active={activeBtn} setActive={setActiveBtn}/>
        <div className='navigation'>
            {navList.map(el => 
                <Link key={el.id} to={el.href}>{el.title}</Link>
            )}
        </div>
         <Menu header={'Menu'} items={navList} active={activeBtn} setActive={setActiveBtn}/>
    </div>
  )
}
