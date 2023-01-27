import React, { useState } from 'react'
import Burger from '../../atom/Burger/Burger'
import Logo from '../../atom/Logo/Logo'
import Nav from '../../atom/Nav/Nav'
import NavCallToAction from '../../atom/NavCallToAction/NavCallToAction'

const Menu = () => {
    const [abrir, setAbrir] = useState("false")

    return (
        <>
            <div className="md:flex md:justify-between md:items-center">
                <div className="flex justify-between items-center h-24 md:h-40 lg:h-52 md:block">
                    <div className="relative md:top-8 logo">
                        <Logo rodape={false} />
                    </div>
                    <Burger setAbrir={setAbrir} abrir={abrir} />
                </div>
                <Nav
                    abrir={abrir ? 'nav' : 'nav nav-acative'}
                    activeClass={'active'}
                />
                <div>
                    <div className="hidden md:block">
                        <NavCallToAction activeClass={'active'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
