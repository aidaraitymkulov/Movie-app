import { Link } from 'react-router-dom'
import './Card.scss'
export const Card = ({ item: { id,cover,name,rating,time,desc,starring,genres,tags, } }) => {
    return (
            <div className='card'>
                <div className='card__image'>
                    <img src={cover} alt="" />
                </div>
                <div className='container'>
                <div className='card__content'>
                    <h1 className='card__title'>{name}</h1>
                    <div className='card__rating'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star-half'></i>
                        <label>{rating}</label>
                    <span>GP</span>
                    <label>{time}</label>
                </div>
                <p className='card__desc'>{desc}</p>
                <div className='card__cast'>
                    <h4>
                        <span>Starring:</span>
                        {starring}
                    </h4>
                    <h4>
                        <span>Genres:</span>
                        {genres}
                    </h4>
                    <h4>
                        <span>Tags:</span>
                        {tags}
                    </h4>
                </div>
                <button className='card__btn'>
                    <Link to={`/singlepage/${id}`}>
                        <i className='fas fa-play'></i> <span>PLAY NOW</span>
                    </Link>
                </button>
                    </div>
                </div>       
            </div>
    )
}