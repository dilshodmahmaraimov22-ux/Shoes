import React, { useRef, useState } from 'react'
import foto1 from '../Images/foto1.png'
import foto2 from '../Images/foto2.png'
import foto3 from '../Images/foto3.png'
import './Swipe.css'

// Rasmlarni shu yerga qo'shing. Rasmdagidek 5 xil poyabzal bo'lsa, ko'proq rasm qo'shing.
const SLIDES = [foto1, foto2, foto3]

// markazdan chapga va o'ngga qaysi kartalar chizilishi
const OFFSETS = [-4, -3, -2, -1, 0, 1, 2, 3, 4]

const Swipe = () => {
  const [current, setCurrent] = useState(0)
  const touchX = useRef(null)
  const total = SLIDES.length

  const prev = () => setCurrent((c) => c - 1)
  const next = () => setCurrent((c) => c + 1)

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const diff = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(diff) > 40) diff > 0 ? prev() : next()
    touchX.current = null
  }

  return (
    <>
      <div className="swipe">
        <div className="container">
          <div className="swipe__container">
            <h1 className="swipe__title">Фото галерея</h1>
          </div>
        </div>

        <div className="swipe__viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="swipe__track">
            {OFFSETS.map((off) => {
              const n = current + off
              const img = SLIDES[((n % total) + total) % total]
              return (
                <div
                  key={n}
                  className="swipe__slide"
                  data-off={off}
                  data-dim={Math.abs(off) >= 2}
                  style={{ '--off': off }}
                >
                  <img src={img} alt={`Rasm ${((n % total) + total) % total + 1}`} draggable="false" />
                </div>
              )
            })}
          </div>

          <button type="button" className="swipe__btn swipe__btn--prev" onClick={prev} aria-label="Oldingi">
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden="true">
              <path d="M6.5 1.5L2 6L6.5 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button type="button" className="swipe__btn swipe__btn--next" onClick={next} aria-label="Keyingi">
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden="true">
              <path d="M1.5 1.5L6 6L1.5 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Swipe