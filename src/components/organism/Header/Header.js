/* eslint-disable-next-line no-return-assign, no-param-reassign */
import React from 'react'
import Home from '../../molecule/Home/Home'
import Menu from '../../molecule/Menu/Menu'


const Header = ({ background, opacity }) => {
  return (
    <>
      <header className={background}>
        <div className={opacity}>
          <div className="xl:container m-auto px-8">
            <Menu />
            <Home />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
