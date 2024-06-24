import './Header.scss';
import logo from '../../assets/images/cinemaLogo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <header className='header' id='header'>
            <div className='container'>
                <nav className='header__nav'>
                    <div className='header__logo'>
                        <img src={logo} alt="Cinema Logo" />
                    </div>
                    <ul className= {Mobile ? "navMenu__list":'header__list'} onClick={()=>setMobile(false)}>
                    <NavLink className='header__link' to='/'>Home</NavLink>
                    <NavLink className='header__link' to='/series'>Series</NavLink>
                    <NavLink className='header__link' to='/movies'>Movies</NavLink>
                    <NavLink className='header__link' to='/pages'>Pages</NavLink>
                    <NavLink className='header__link' to='/pricing'>Pricing</NavLink> 
                    <NavLink className='header__link' to='/contatc'>Contact</NavLink>
                    </ul>
                    <button className='header__btn' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>

                <div className='header__account'>
                    <i className='fa fa-user'></i>
                </div>
            </div>
        </header>
    );
};
