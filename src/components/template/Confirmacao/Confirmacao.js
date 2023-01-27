/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import React from 'react'
import Logo from '../../atom/Logo/Logo'

const Confirmacao = () => {
	return (
		<section className="h-screen w-full cadastro text-blue-700">
			<div className="xl:container m-auto px-8">
				<div className="flex justify-center py-14">
					<Logo rodape={true} />
				</div>
				<div className="grid md:grid-rows-1 md:grid-cols-2 md:items-center">
					<div className="relative mb-40 md:m-0 hidden md:block selos" >
						<img src="/img/selos.png" alt='' />
					</div>
					<div>
						<h2 className="text-4xl pb-8 sm:text-5xl md:text-6xl lg:text-7xl font-semibold inline-block">
							Obrigado!
							<span className="title-line">&mdash;</span>
						</h2>
						<p className="text-base sm:text-lg md:mn-16 md:text-xl font-normal">
							<div className="flex justify-center md:hidden mb-14">
								<img src="/img/selos.png" alt='' />
							</div>
							<strong>Agora sabemos que você combina com a Amabank</strong> porque se importa mesmo
							com o meio-ambiente e com os impactos
							positivos que a <strong>Ama</strong>zônia nos oferece!
						</p>
						<p className="bg-green-600 md:mt-16 p-4 my-12 text-white-50  text-base rounded-2xl text-center">Em breve, nosso e-mail vai chegar até a sua caixa de entrada.</p>

					</div>
				</div>
				<div className="pb-6  md:mr-28 flex justify-center md:py-20">
					<Link href="https://www.instagram.com/meuamabank">
						<span className="mr-4">
							<i className="pr-4">
								<img src="/img/insta-png.png" width="32" height="32" alt='' />
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
		</section>
	)
}

export default Confirmacao
