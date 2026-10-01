import React from 'react'
import { Link } from 'react-router-dom'
import { FaTelegram } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Header = () => {
  return (
    <>
    <header className='header'>
        <div className="container">
            <div className="header__container">
                <ul className='header__list'>
                    <li className='header__item'>
                        <img src="" alt="" />
                        <p></p>
                        <Link><FaTelegram/></Link>
                        <Link><FaInstagram/></Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header