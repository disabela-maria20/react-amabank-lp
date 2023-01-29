/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable-next-line no-return-assign, no-param-reassign */
import FormRegister from '../../molecule/FormRegister/FormRegister'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import { CgArrowLongRight } from 'react-icons/cg'
import { Slide, Fade, Zoom } from "react-awesome-reveal";


const Section = ({ }) => {

  return (
    <section className="section">
      <div className="xl:container m-auto px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-14 text-blue-700">
          <Slide duration={1000} direction="left">
            <div id="form">
              <FormRegister />
            </div>
          </Slide>
          <article className="xl:pt-24">
            <Slide duration={1000} direction="right">
              <div className="pt-16 pb-5 lg:pt-28">
                <h2 className="title-paragraph font-semibold inline-block">
                  O <span className="italic">amabanker</span> usa,<br /> nós, preservamos!
                  <span className="title-line">&mdash;</span>
                </h2>
              </div>
              <div className="paragraph">
                <p className="pb-6 xl:pb-12">
                  Quanto mais você utiliza nossos serviços no app do <strong >Amabank</strong>, mais direcionamos uma parte da nossa receita para o programa <strong className="underline">“Nós pela Amazônia”</strong>.
                </p>
                <p className="pb-6 xl:pb-12">
                  <strong>Você não paga nada pela nossa doação</strong>, mas faz parte dela por escolher se integrar ao nosso Banco Digital!
                </p>
                <p className="pb-6 xl:pb-12">
                  Além disso, juntos, fazemos parte de:
                </p>
              </div>
              <ul className="ul-paragraph ml-14 pb-16">
                <li>Projetos Climáticos;</li>
                <li>Projetos Ambientais;</li>
                <li>Projetos Sociais;</li>
                <li>Gestão de unidades de conservação;</li>
                <li>Aquisição de novas áreas para conservação.</li>
              </ul>
              <div className="grid grid-cols-2 lg:w-full pb-12 sm:w-7/12 ">
                <div>
                  <h5 className="font-bold title-h5">
                    Saiba tudo sobre a causa acessando o site oficial: <br />
                    <Link href="https://amazonianalliance.com" targat="_black">
                      <span className="underline italic font-normal">amazonianalliance.com</span>
                    </Link>
                  </h5>
                </div>
                <img src="/img/nos-pela-amazônia.png" alt="amazonia" width='' height="" />
              </div>
            </Slide>
          </article>
          <article className="md:hidden">
            <Zoom duration={1000} direction="down">
              <div className="relative flex justify-center">
                <img src="/img/card.png" className="m-auto" width='' height="" />
              </div>
            </Zoom>
          </article>
          <article >
            <div id="banco-digital">
              <Slide duration={1000} direction="left">
                <div className="pt-5 pb-5 lg:pb-20">
                  <h2 className="title-paragraph font-semibold inline-block pb-5">
                    Igual <span className="font-normal">ao que você já conhece, mas ainda</span>  melhor!
                    <span className="title-line">&mdash;</span>
                  </h2>
                </div>
                <div className="paragraph pb-10">
                  <p className="pb-6 xl:pb-12">
                    Temos a <strong>tecnologia equivalente</strong> às fintechs que você já conhece, mas com o diferencial de prestarmos contas através do nosso <em>app</em>, <strong className="italic">em tempo real!</strong>
                  </p>
                  <p className="pb-6 xl:pb-12">
                    <strong>Mostramos o quanto estamos investindo na natureza com parte da nossa receita, em detalhes.</strong> Tudo o que fazemos é porque acreditamos que o planeta e as pessoas vêm acima do lucro!
                  </p>
                  <p className="pb-6 xl:pb-12">
                    <strong>E tudo isso graças à você,</strong> que nos escolheu como o seu Banco Digital, visando preservar a Amazônia constantemente e sem precisar descontar do próprio bolso!
                  </p>
                </div>
              </Slide>
            </div>
          </article>
          <article className="hidden lg:flex lg: justify-center flex-col xl:block">
            <Slide duration={1000} direction="right">
              <div className="lg:relative app">
                <img src="/img/app.png" />
              </div>
            </Slide>
          </article>
          <article className="col-span-2 h-auto">
            <div id="servicos">
              <Zoom duration={1000} direction="down">
                <h2 className="title-paragraph font-semibold inline-block pb-10">
                  O que você faz no app da Amabank?
                  <span className="title-line">&mdash;</span>
                </h2>
              </Zoom>
            </div>
          </article>
          <article className="block sm:hidden">
            <Slide duration={1000} direction="right">
              <div className="px-11">
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-10 font-semibold list-app">
                  <li className="bg-lg">
                    <span>PIX</span>
                  </li>
                  <li className="borda">
                    <div className="relative">
                      <img src="/img/icon.png" className="icon" />
                    </div>
                    <span>RECARGA DE CELULAR</span>
                  </li>
                  <li className="borda">
                    <div className="relative">
                      <img src="/img/icon.png" className="icon" />
                    </div>
                    <span>EMPRÉSTIMO <br /> PJ E PF</span>
                  </li>
                  <li className="bg-lg">
                    <span>SEGUROS</span>
                  </li>
                  <li className="bg-lg">
                    <span>PAGAMENTOS <br /> DE CONTAS</span>
                  </li>
                  <li className="borda">
                    <div>
                      <img src="/img/icon.png" className="icon" />
                    </div>
                    <span>CARTÃO DIGITAL</span>
                  </li>
                  <li className="borda">
                    <div className="relative">
                      <img src="/img/icon.png" className="icon" />
                    </div>
                    <span>TRANSFERÊNCIA ENTRE CONTAS</span>
                  </li>
                  <li className="bg-lg">
                    <span>SAQUE NA <br />REDE 24H </span>
                  </li>
                  <li className="bg-lg">
                    <span>PAGAMENTO <br />POR QR CODE</span>
                  </li>
                  <li className="borda">
                    <div className="relative">
                      <img src="/img/icon.png" className="icon" />
                    </div>
                    <span>BOLETO <br /> BANCÁRIO</span>
                  </li>
                  <li className="col-span-2 bg-lg">
                    CARTÃO DE DÉBITO COM <br /> MODALIDADE CRÉDITO
                  </li>
                </ul>
              </div>
            </Slide>
          </article>
          <article className="hidden sm:block lg:col-span-2">
            <Slide duration={1000} direction="left">
              <div className="px-11 flex lg:pb-36" >
                <div className="relative men hidden lg:block">
                  <img src="/img/persona-homem.png" />
                </div>
                <div>
                  <ul className="grid grid-cols-2 sm:grid-cols-4 gap-10 font-semibold list-app md:pb-24">
                    <li className="bg-lg">
                      <span>PIX</span>
                    </li>
                    <li className="borda">
                      <div className="relative">
                        <img src="/img/icon.png" className="icon" />
                      </div>
                      <span>RECARGA DE CELULAR</span>
                    </li>
                    <li className="bg-lg">
                      <span>SAQUE NA <br />REDE 24H </span>
                    </li>
                    <li className="borda">
                      <div className="relative">
                        <img src="/img/icon.png" className="icon" />
                      </div>
                      <span>TRANSFERÊNCIA ENTRE CONTAS</span>
                    </li>
                    <li className="borda">
                      <div className="relative">
                        <img src="/img/icon.png" className="icon" />
                      </div>
                      <span>EMPRÉSTIMO <br /> PJ E PF</span>
                    </li>
                    <li className="bg-lg">
                      <span>SEGUROS</span>
                    </li>
                    <li className="borda">
                      <div className="relative">
                        <img src="/img/icon.png" className="icon" />
                      </div>
                      <span>BOLETO <br /> BANCÁRIO</span>
                    </li>
                    <li className="bg-lg">
                      <span>PAGAMENTOS <br /> DE CONTAS</span>
                    </li>
                    <li className="bg-lg">
                      <span>PAGAMENTO <br />POR QR CODE</span>
                    </li>
                    <li className="borda">
                      <div>
                        <img src="/img/icon.png" className="icon" />
                      </div>
                      <span>CARTÃO DIGITAL</span>
                    </li>
                    <li className="col-span-2 bg-lg">
                      CARTÃO DE DÉBITO COM <br /> MODALIDADE CRÉDITO
                    </li>
                    <li className="col-span-4">
                      <div className="text-center pt-20 rounded-3xl  mt-20">
                        <h4 className="font-bold text-lg">QUERO TODOS ESSES BENEFÍCIOS</h4>
                        <p className="font-medium text-base">
                          e ainda ajudar a proteger a <span className="font-bold">Ama</span>zônia <br /> ativamente, <span className="font-bold">de graça!</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Slide>
          </article>
          <article className="block md:hidden">
            <Zoom duration={1000} direction="down">
              <div className="text-center bg-white-50 py-3 rounded-3xl mt-9 mb-20 block sm:hidden">
                <h4 className="font-bold text-tiny">QUERO TODOS ESSES BENEFÍCIOS</h4>
                <p className="font-medium text-xs">
                  e ainda ajudar a proteger a <span className="font-bold">Ama</span>zônia <br /> ativamente, <span className="font-bold">de graça!</span>
                </p>
              </div>
            </Zoom>
          </article>
        </div>
      </div>
      <article className="gerenation_planet relative block md:hidden mt-24">
        <Zoom duration={1000} direction="down">
          <img src="/img/gerenation_planet.png" />
        </Zoom>
      </article>
      <article className="bg-green-600 pb-24">
        <div className="xl:container m-auto px-8">
          <div className="lg:grid grid-670-auto pt-16">
            <div className="lg:pr-20">
              <Slide duration={1000} direction="left">
                <div className="pt-16 pb-5">
                  <div id="selos">
                    <h2 className="text-lg sm:text-2xl lg:text-5xl font-semibold inline-block text-white-50  lg:pt-10 lg:pb-24">
                      Precisamos de pessoas que estejam na mesma sintonia que a gente!
                      <span className="title-line text-blue-700">&mdash;</span>
                    </h2>
                  </div>
                </div>
                <div className="bg-white-50 p-12 lg:p-20 rounded-3xl relative">
                  <p className="font-medium text-xs sm:text-tiny lg:text-base text-blue-700">
                    Dá uma olhada nos selos que você pode receber
                    <span className="font-bold">utilizando nosso app</span> enquanto também luta pela
                    Amazônia, pelo clima e pelas pessoas!
                  </p>
                  <p className="font-semibold text-xs sm:text-tiny lg:text-base text-blue-700 italic pt-6">
                    #OPlanetaEAsPessoasAcimaDoLucro
                  </p>

                  <i className="absolute right-5 bottom-5 block lg:hidden">
                    <HiOutlineArrowNarrowDown className="text-xl text-blue-700" />
                  </i>
                  <i className="absolute right-5 bottom-5 hidden lg:block">
                    <CgArrowLongRight className="text-4xl text-blue-700" />
                  </i>
                </div>
                <div className="mt-10 hidden lg:block">
                  <Link href="#form" className="bg-blue-700 block text-white-50  text-center py-4 font-bold text-lg rounded-2xl cursor-pointer">
                    QUERO SER UM AMABANKER E AJUDAR A AMAZÔNIA!
                  </Link>
                </div>
              </Slide>
            </div>
            <Slide duration={1000} direction="right">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 pr-0 pl-10 sm:pt-10  max-w-xl m-auto sm:max-w-full gap-10 lg:gap-3 lg:bg-white-50 h-5/6 rounded-3xl lg:pb-14 lg:pt-14 lg:pl-14 lg:pr-10">
                <div className="relative icon-card">
                  <h3 className="text-white-50  lg:text-blue-700 font-semibold text-sm lg:text-base sm:h-24 sm:flex sm:justify-center sm:flex-col">Novo <br /> Amabanker</h3>
                  <img src="/img/card_folha.png" />
                </div>
                <div className="relative icon-card">
                  <h3 className="text-white-50  lg:text-blue-700 font-semibold text-sm lg:text-base sm:h-24 sm:flex justify-center sm:flex-col">Usuário <br /> Ativo</h3>
                  <img src="/img/card_user.png" />
                </div>
                <div className="relative icon-card">
                  <h3 className="text-white-50  lg:text-blue-700 font-semibold text-sm lg:text-base h-24 lg:h-48 flex justify-center flex-col">Inovador</h3>
                  <img src="/img/card_lampada.png" />
                </div>
                <div className="relative icon-card">
                  <h3 className="text-white-50  lg:text-blue-700 font-semibold text-sm lg:text-base h-24 lg:h-48 flex justify-center flex-col lg:w-3/5">20 toneladas de carbono estocados</h3>
                  <img src="/img/card_20_ton.png" />
                </div>
              </div>
            </Slide>
          </div>
          <div className="mt-14 block lg:hidden">
            <Link href="#form" className="bg-glue-700 block text-white-50  text-center py-2 font-bold text-sm rounded-2xl">
              QUERO SER UM AMABANKER <br /> E AJUDAR A AMAZÔNIA!
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Section
