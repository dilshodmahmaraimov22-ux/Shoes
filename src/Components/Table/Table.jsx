import React, { useEffect, useRef, useState } from 'react'
import './Table.css'

const OPTIONS = [
  'Lorem ipsun, dolor smit',
  'Lorem ipsun, dolor smit',
  'Lorem ipsun, dolor smit',
  'Lorem ipsun, dolor smit',
  'Lorem ipsun, dolor smit',
  'Lorem ipsun, dolor smit',
]

const Select = ({ placeholder = 'Lorem ipsun', options = OPTIONS, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  const [value, setValue] = useState('')
  const ref = useRef(null)

  // tashqariga bosilganda yoki Escape bosilganda yopiladi
  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const choose = (text) => {
    setValue(text)
    setOpen(false)
  }

  return (
    <div className={`select ${open ? 'select--open' : ''}`} ref={ref}>
      <button
        type="button"
        className="select__control"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="select__value">{value || placeholder}</span>
        <svg className="select__arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul className="select__list" role="listbox">
          {options.map((item, i) => (
            <li
              key={i}
              role="option"
              tabIndex={0}
              aria-selected={value === item}
              className="select__item"
              onClick={() => choose(item)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && choose(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const Table = () => {
  return (
    <>
      <div className="table">
        <div className="container">
          <div className="table__container">
            {/* 1. Выбор из списка */}
            <section className="table__section">
              <h1 className="table__title">выбор из списка</h1>
              <div className="table__selects">
                <Select />
                <Select defaultOpen />
              </div>
            </section>

            {/* 2. Списки */}
            <section className="table__section table__lists">
              <div className="table__col">
                <h2 className="table__title">неупорядоченный</h2>
                <ul className="table__ul">
                  <li>Lorem ipsun, dolor smit</li>
                  <li>Lorem ipsun, dolor smit</li>
                  <li>Lorem ipsun, dolor smitLorem ipsun, dolor smit</li>
                  <li>Lorem ipsun, dolor smit</li>
                  <li>Lorem ipsun, dolor smitLorem ipsun, dolor smit</li>
                  <li>Lorem ipsun, dolor smit</li>
                  <li>Lorem ipsun, dolor smit</li>
                </ul>
              </div>

              <div className="table__col">
                <h2 className="table__title">упорядоченный</h2>
                <ol className="table__ol">
                  <li>
                    Lorem ipsun, dolor smit
                    <ul>
                      <li>Lorem ipsun, dolor smit</li>
                      <li>Lorem ipsun, dolor smit</li>
                      <li>Lorem ipsun, dolor smit</li>
                    </ul>
                  </li>
                  <li>
                    Lorem ipsun, dolor smit
                    <ul>
                      <li>Lorem ipsun, dolor smit</li>
                      <li>Lorem ipsun, dolor smit</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </section>

            {/* 3. Blockquote */}
            <section className="table__section">
              <h2 className="table__title">Блок цитаты blockquote</h2>
              <blockquote className="quote">
                <span className="quote__icon" aria-hidden="true">&ldquo;</span>
                <div className="quote__body">
                  <p className="quote__text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <cite className="quote__author">Lorem Ipsum</cite>
                </div>
              </blockquote>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table