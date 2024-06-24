import { useState } from 'react'
import './Home.scss'
import { homeData } from '../../dummyData' 
import { Hero } from '../../component/Hero/Hero'

export const Home = () => {

    const [items, setItems] = useState(homeData)
    return (
        <>
            <section className='hero'>
                <Hero items={items}/>
            </section>
            <div className='margin'></div>
        </>
    )
}