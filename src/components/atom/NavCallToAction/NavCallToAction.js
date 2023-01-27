import Link from "next/link"
const NavCallToAction = ({ activeClass }) => {
    return (
        <Link href="#">
            <span className={`${activeClass} cursor-pointer text-white bg-green-600 py-4 px-5 rounded-2xl mb-8 lg:text-base md:text-tiny text-white-50 `}>
                Quero preservar a <span className="font-bold">Ama</span>zônia!
            </span>
        </Link>

    )
}

export default NavCallToAction
