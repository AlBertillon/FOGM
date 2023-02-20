import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../page/StartMenu/components/Header/Header'

export default function Layout() {
  return (
    <>
        <div className='wrapper-header'>
            <Header />
        </div>
        <main>
            <Outlet />
        </main>
    </>
  )
}
