import { Card } from '../Card'
import './Hero.scss'

export const Hero = ({ items }) => {
    return (
          <div className='heroContainer'>
            {items.map((item) => (
                <Card key={item.id} item={item} />
            ))}
          </div>
    )
}