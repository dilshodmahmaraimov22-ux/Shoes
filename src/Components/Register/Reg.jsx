import React from 'react'
import './Reg.css'
import { Link } from 'react-router-dom'

const Reg = () => {
  return (
    <>
    <div className="reg">
        <div className="container">
            <div className="reg__container">
                <h1 className='reg__title'>Заголовок H1</h1>
                <h1 className='reg__title'>Font Inter 60px</h1>
                <ul className='reg__list'>
                    <li className='reg__item'>
                        <h1 className='reg__title2'>Хлебные крошки</h1>
                        <p className='reg__text'>Главная</p>
                        <form className='reg__from'>
                            <label htmlFor="title">Заполните поля</label>
                            <input className='reg__input' type="text" placeholder='Имя'/>
                            <input className='reg__input' type="phone" placeholder='Телефон'/>
                            <input className='reg__input' type="e-mail" placeholder='E-mail'/>
                            <input className='reg__radio' type="radio" /> <p className='reg__text2'>Соглашаюсь на обратку персональных данных</p>
                            <button className='reg__btn'>Отправить</button>
                        </form>
                    </li>
                    <li className='reg__item'>
                        <form className='reg__form2'>
                            <label htmlFor="title2">Авторизации</label>
                            <input className='reg__input2' type="e-mail" placeholder='E-mail' />
                            <input className='reg__input2' type="password" placeholder='Пароль' />
                            <Link className='reg__link'>Восстановить пароль</Link>
                            <button className='reg__btn2'>Отправить</button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Reg