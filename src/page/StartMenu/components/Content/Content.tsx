import React from 'react'
import './style.css';

export default function Content() {
    const dataInfo = [
        {id: 11, title: 'Какой-то текст', subTitle: 'Какой то текст', img: 'https://phonoteka.org/uploads/posts/2021-06/1622516395_18-phonoteka_org-p-taverna-dnd-art-krasivo-19.jpg'},
        {id: 22, title: 'Какой-то текст', subTitle: 'Какой то текст', img: 'https://images.ctfassets.net/swt2dsco9mfe/69VVMBBFaqmUfQPJ6GioOP/ff21b7b867eea95661e3f9a5aa8b2e6b/1920x1080-kubrick.jpg?q=70&fit=thumb&w=1920&h=1080&fm=avif'},
        {id: 33, title: 'Какой-то текст', subTitle: 'Какой то текст', img: 'https://images.ctfassets.net/swt2dsco9mfe/5EIvzePgmOvsxa4FZgtQs9/cd5c60492ecef1684d1179ff54c63a50/1920x1080-zodiac-2.jpg?q=70&fit=thumb&w=1920&h=1080&fm=avif'},
        {id: 44, title: 'Какой-то текст', subTitle: 'Какой то текст', img: 'https://images.ctfassets.net/swt2dsco9mfe/5Laaorxyb0e56mbCqFWc65/ca694253a256d0866c7fdfa3b85f7ef4/SCAG_1920x1080_Wallpaper.jpeg?q=70&fit=thumb&w=1920&h=1080&fm=avif'},
        {id: 55, title: 'Какой-то текст', subTitle: 'Какой то текст', img: 'https://images.ctfassets.net/swt2dsco9mfe/3lasUZghGHa2IOsxNZSFJB/14b204bfdbd94e83f19792ae6beed767/8878721400_1920x1080.jpg?q=70&fit=thumb&w=1920&h=1080&fm=avif'},
        {id: 66, title: 'Какой-то текст', subTitle: 'Какой то текст', img: 'https://images.ctfassets.net/swt2dsco9mfe/IDkWUu234TPEXN9SaaTUs/8bf83fadc45ab59c0c4593f4d06d9fdf/Xanathars_Wallpaper_1920x1080.jpeg?q=70&fit=thumb&w=1920&h=1080&fm=avif'},
    ]
  return (
    <div className='content'>
        <div className='wrapper-list-info'>
            {dataInfo.map(el => 
            <div className='info-item' style={{backgroundImage: `url(${el.img})`}} key={el.id}>
                <div className='description-item' >
                    <h2>{el.title}</h2>
                    <h3>{el.subTitle}</h3>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}
