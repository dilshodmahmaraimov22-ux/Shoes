import React from 'react'

const Input = () => {
  return (
    <>
    <div className="input">
        <div className="container">
            <div className="input__container">
                <ul className='input__list'>
                    <li className='input__item'>
                        <h1 className='input__title'>элементы чекбоксов, радио кнопок, выбор из списка</h1>
                        <div className='input__flex'>
                            <input type="checkbox"/> <p className='input__text'>Соглашаюсь на обратку персональных данных</p>
                        </div>
                        <div className='input__flex'>
                            <input type="checkbox"/> <p className='input__text'>Соглашаюсь на обратку персональных данных</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Input