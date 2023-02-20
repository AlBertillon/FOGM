import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PlayingField from '../page/PlayingField/PlayingField'
import Home from '../page/StartMenu/Home'
import Layout from './Layout'
import NoFounted from './NoFounted'

export default function Routers() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path='plaingField' element={<PlayingField />}/>
                <Route path='*' element={<NoFounted />}/>
            </Route>
        </Routes>
    </>
  )
}
