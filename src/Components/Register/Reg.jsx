import React, { useState } from 'react'
import './Reg.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Reg = () => {
    const [text, setText] = useState("");
    const [number, setNumber] = useState("");

    const BOT_TOKEN = 'AAF8Plq3fObfaTIkKH2JEcrbmsJFMD6FZ0c';
    const chat_id = '6812225312';

    const sendMessage = async(e)=>{
        e.preventDefault();
        
        const xabar = `yangi xabar ${text}\n tel: ${number}`
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
        
        try{
            await axios.post(url,{
                chat_id: chat_id,
                text: xabar,
            })
            setText("");
            setNumber("");
        }catch{
            alert("nimadur xato")
        }
    }
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
                            <div className='reg__flex'>
                                <input className='reg__radio' type="checkbox" /> <p className='reg__text2'>Соглашаюсь на обратку персональных данных</p>
                            </div>
                            <button className='reg__btn'>Отправить</button>
                        </form>
                    </li>
                    <li className='reg__item2'>
                        <form onSubmit={sendMessage} className='reg__form2'>
                            <label htmlFor="title2">Авторизации</label>
                            <input className='reg__input2' 
                            type="text" 
                            placeholder='Text' 
                            value={text}
                            onChange={(e)=>setText(e.target.value)}
                            />
                            <input className='reg__input2' 
                            type="number" 
                            placeholder='Пароль' 
                            value={number}
                            onChange={(e)=>setNumber(e.target.value)}
                            />
                            <Link className='reg__link'>Восстановить пароль</Link>
                            <button type='submit' className='reg__btn2'>Отправить</button>
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