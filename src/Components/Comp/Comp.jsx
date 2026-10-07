import React, { useRef, useState } from 'react'
import photo1 from '../Images/photo1.jpg'
import photo2 from '../Images/photo2.jpg'
import photo3 from '../Images/photo3.png'
import './Comp.css'

const Comp = () => {
  return (
    <section className="comp">
      <div className="container">
        <h2 className="comp__title">О компании</h2>

        <div className="comp__top">
          <p className="comp__text">
            <b className="comp__brand">Refreshoes</b> – это профессиональная мастерская,
            специализирующаяся на ремонте и реставрации брендовой обуви, сумок, курток и
            изделий из кожи любого уровня сложности.. Наша компания работает на рынке более
            15 лет. Все работы по ремонту и реставрации выполняются высококвалифицированными
            мастерами с использованием современных технологий и высококачественной обувной
            косметики европейского производства. Мы контролируем все этапы работы и дорожим
            доверием клиентов. У нас большой опыт и репутация. Мы профессионалы своего дела.
          </p>

          <div className="comp__photos">
            <img className="comp__photo comp__photo--1" src={photo1} alt="" />
            <img className="comp__photo comp__photo--2" src={photo2} alt="" />
            <img className="comp__photo comp__photo--3" src={photo1} alt="" />
          </div>
        </div>

        <div className="comp__video">
            <>
              <img className="comp__cover" src={photo3} alt="" />
              <button
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                  <circle cx="40" cy="40" r="37" stroke="#fff" strokeWidth="4" />
                  <path d="M33 26L55 40L33 54V26Z" stroke="#fff" strokeWidth="4" strokeLinejoin="round" />
                </svg>
              </button>
            </>
        </div>
      </div>
    </section>
  )
}

export default Comp