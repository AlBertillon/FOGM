import React, { useState } from 'react'
import BurgerBtn from '../../../../UI/BurgerBtn/BurgerBtn'
import { Menu } from '../../../../UI/Menu/Menu'
import './Header.css'



export default function Header() {
    const navList = [
        {id: 1, href: '', title: 'Первая кнопка'},
        {id: 2, href: '', title: 'Вторая кнопка'},
        {id: 3, href: '', title: 'Третья Кнопка'},
    ]

  const [activeBtn, setActiveBtn] = useState(false)

  return (
    <div className='header'>
        <BurgerBtn active={activeBtn} setActive={setActiveBtn}/>
        <div className='navigation'>
            {navList.map(el => 
                <a key={el.id} href={el.href}>{el.title}</a>
            )}
        </div>
         <Menu header={'Menu'} items={navList} active={activeBtn} setActive={setActiveBtn}/>
    </div>
  )
}
