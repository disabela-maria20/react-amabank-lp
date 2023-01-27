/* eslint-disable @next/next/no-img-element */

const Logo = ({ rodape, className }) => {
    if (rodape == true) {
        return (
            <img src="/img/logo-footer.png" alt="Logo AmeBank" className={className} />
        )
    } else {
        return (
            <img src='/img/logo.png' alt="Logo AmeBank" className={className} />
        )
    }
}

export default Logo

