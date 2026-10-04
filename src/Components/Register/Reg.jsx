import React from 'react'

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