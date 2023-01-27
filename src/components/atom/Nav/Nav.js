/* eslint-disable-next-line no-return-assign, no-param-reassign */
import Link from 'next/link'
import NavCallToAction from '../NavCallToAction/NavCallToAction'

const Nav = ({ abrir, activeClass }) => {
    return (
        <nav className={abrir}>
            <ul className="md:flex">
                <li className={`md:mr-10 lg:mr-12 ${activeClass}`}>
                    <Link href="/">
                        Banco Digital
                    </Link>
                </li>
                <li className={`md:mr-10 lg:mr-12 ${activeClass}`}>
                    <Link href="/">
                        Serviços
                    </Link>
                </li>
                <li className={`md:mr-10 lg:mr-12 ${activeClass}`}>
                    <Link href="/">
                        Selos
                    </Link>
                </li>
                <li className={`md:mr-10 lg:mr-12 ${activeClass}`}>
                    <Link href="/">
                        Contato
                    </Link>
                </li>
            </ul>
            <div className={`${activeClass} block md:hidden`}>
                <NavCallToAction activeClass={activeClass} />
            </div>

        </nav>
    )
}

export default Nav
