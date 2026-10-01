import React from 'react'
import { Link } from 'react-router-dom'
import { FaTelegram, FaInstagram, FaPhone} from 'react-icons/fa'
import logo from '../Images/logo.png'
import location from '../Images/location.png'

const Header = () => {
  return (
    <>
    <header className='header'>
        <div className="container">
            <div className="header__container">
                <ul className='header__list'>
                    <li className='header__item'>
                        <img className='header__img' src={logo} alt="logo" />
                        <p className='header__text'>Время работы: 11:00 до 20:00</p>
                        <Link className='header__link'><FaTelegram/></Link>
                        <Link className='header__link'><FaInstagram/></Link>
                    </li>
                    <li className='header__item'>
                        <img className='header__img' src={location} alt="location" />
                        <p className='header__text'>Lorem Ipsum is simply dummy text of the printing.</p>
                        <Link className='header__link2'><FaPhone/>+7 (999) 999-09-99</Link>
                    </li>
                </ul>
                <Link to="/">Фото галерея</Link>
                <Link to="/video">Видео галерея</Link>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header