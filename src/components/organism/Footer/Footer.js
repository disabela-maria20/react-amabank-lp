/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import Logo from '../../atom/Logo/Logo'

const Footer = () => {

  return (
    <footer>
      <div className="xl:container m-auto px-8">
        <div className="grid grid-rows-3 grid-cols-2 md:grid-cols-4 md:grid-rows-1 gap-5 text-blue-700 text-xs md:text-tiny pt-8 pb-6 lg:py-16">
          <address className="not-italic col-span-2 md:col-auto">
            <p>Amabank S/A.</p>
            <p>CNPJ/MF n. 35.379.282/0001-64</p>
            <p>Rua Humberto Carta, 96 - Hugo Lange</p>
            <p>80.040-150 - Curitiba - Paraná.</p>
          </address>
          <div className="col-span-2 md:col-auto">
            <h4 className="font-bold">Contato:</h4>
            <Link href="mailto:contato@amabank.io">
              <span className="block">contato@amabank.io</span>
            </Link>
            <Link href="tel:08006521000">
              <span className="block">0800-652-1000</span>
            </Link>
            <Link href="tel:+554130197219">
              <span className="block">41 3019-7219</span>
            </Link>
          </div>
          <div className="col-span-1 md:col-auto">
            <h4 className="font-bold">Nos siga nas redes:</h4>
            <div className="pt-6 md:mr-28 flex justify-center">
              <Link href="https://www.instagram.com/meuamabank">
                <span>
                  <i className="pr-4">
                    <img src="/img/insta-png.png" width="32" height="32" alt='' className="mr-4" />
                  </i>
                </span>
              </Link>
              <Link href="https://web.facebook.com/meuamabank">
                <span className="block">
                  <i>
                    <img src="/img/fb-png.png" width="32" height="32" alt='' />
                  </i>
                </span>
              </Link>

            </div>
          </div>
          <div className="col-span-1 md:col-auto">
            <div className="logo-footer relative left-8 top-8 md:top-0 xl:left-48">
              <Logo rodape={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-300">
        <div className="xl:container m-auto px-8">
          <p className="text-blue-700 text-xs py-1 sm:text-tiny">
            Todos direitos reservados à Amabank© {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
