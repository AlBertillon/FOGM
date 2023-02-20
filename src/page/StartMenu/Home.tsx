import React from 'react'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import WindowInfo from './components/WindowInfo/WindowInfo'
import './style.css'

export default function Home() {
  return (
    <div className='start-menu'>
        <WindowInfo />
        <Content />
        <Footer />
    </div>
  )
}
