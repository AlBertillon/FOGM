import React from 'react'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import WindowInfo from './components/WindowInfo/WindowInfo'
import './style.css'

export default function StartMenu() {
  return (
    <div className='start-menu'>
        <Header />
        <WindowInfo />
        <Content />
        <Footer />
    </div>
  )
}
