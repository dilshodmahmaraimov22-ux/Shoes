import React from 'react'
import './Input.css'

const Input = () => {
  return (
    <div className="input">
      <div className="container">
        <div className="input__container">
          <ul className="input__list">
            <li className="input__item">
              <h1 className="input__title">
                элементы чекбоксов, радио кнопок, выбор из списка
              </h1>

              {/* Checkboxlar bloki */}
              <div className="input__checkbox-group">
                <label className="input__flex">
                  <input className="input__inp" type="checkbox" />
                  <p className="input__text">Соглашаюсь на обратку персональных данных</p>
                </label>
                <label className="input__flex">
                  <input className="input__inp" type="checkbox" defaultChecked />
                  <p className="input__text">Соглашаюсь на обратку персональных данных</p>
                </label>
              </div>

              {/* Radio-knopkalar va strelka bloki */}
              <div className="input__radio-section">
                {/* Aktiv holat ko'rsatkichi (Strelka) */}
                <div className="input__pointer">
                  <span className="input__title2">Активная<br />Радио-кнопка</span>
                  <div className="input__arrow">→</div>
                </div>

                <div className="input__radio-flex">
                  {/* Chap ustun (Unchecked) */}
                  <div className="input__radio-col">
                    <label className="input__flex2">
                      <input className="input__radio" type="radio" name="group1" />
                      <p className="input__text2">Радио-кнопка 1</p>
                    </label>
                    <label className="input__flex2">
                      <input className="input__radio" type="radio" name="group1" />
                      <p className="input__text2">Радио-кнопка 2</p>
                    </label>
                    <label className="input__flex2">
                      <input className="input__radio" type="radio" name="group1" />
                      <p className="input__text2">Радио-кнопка 3</p>
                    </label>
                  </div>

                  {/* O'ng ustun (1-si active) */}
                  <div className="input__radio-col">
                    <label className="input__flex2">
                      <input className="input__radio" type="radio" name="group2" defaultChecked />
                      <p className="input__text2">Радио-кнопка 1</p>
                    </label>
                    <label className="input__flex2">
                      <input className="input__radio" type="radio" name="group2" />
                      <p className="input__text2">Радио-кнопка 2</p>
                    </label>
                    <label className="input__flex2">
                      <input className="input__radio" type="radio" name="group2" />
                      <p className="input__text2">Радио-кнопка 3</p>
                    </label>
                  </div>
                </div>
              </div>
            </li>

            {/* O'ng tarafdagi tugmalar bloki */}
            <li className="input__item input__item--buttons">
              <button className="input__btn">Отправить</button>
              <button className="input__btn2">Отмена</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Input