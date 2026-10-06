import React from 'react'
import vid from '../Images/vid.png'

const Vid = () => {
  return (
    <>
    <div className="vid">
      <div className="container">
        <div className="vid__container">
          <ul className='vid__list'>
            <li className='vid__item'>
              <img src={vid} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Vid