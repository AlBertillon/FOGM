import React, { useEffect, useState } from 'react'
import Header from '../StartMenu/components/Header/Header'
import ContentPlayingGame from './ContentPlayingGame/ContentPlayingGame'
import GemaMenu from './gameMenu/GemaMenu'
import { useMonsterInfo } from './hooks/useMonsterInfo copy'
import { useMonsterList } from './hooks/useMonsterList'
import './style.css'

export default function PlayingField() {
    const {monsters, loading} = useMonsterList()
    const [visible, steVisible] = useState(false)
    const {fetchMonstertList, monster} = useMonsterInfo()
    
    monsters.length = 25;

    console.log(monster)

  return (
    <div className='playing-field'>
        <Header />
        <GemaMenu steVisible={steVisible} visible={visible}/>
        <ContentPlayingGame />
        <div className={visible ? 'modal-wrapper open' : 'modal-wrapper'}>
            <div className='modal-blur' onClick={() => steVisible(!visible)}/>
            <div className='modal'>
                <div className='monster-list'>
                    {monsters.map((el) => 
                    <div className='monster-card' key={el.index} onClick={() => fetchMonstertList(el.index)}>
                        <h2>{el.name}</h2>
                    </div>)}
                </div>
                <div className='detail-info-select-monster'>
                <h2>{monster.name}</h2>
                        <img className='moster-art' src={`https://www.dnd5eapi.co${monster.image}`} alt={monster.name}/>
                </div>
            </div>
            
        </div>
    </div>
  )
}
