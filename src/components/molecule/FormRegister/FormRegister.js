
/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Link from 'next/link'
import InputMask from 'react-input-mask';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';

const FormRegister = () => {

    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data.nome !== "" || data.email !== "" || data.estado !== "" || data.dtnasc !== "" || data.melhorias !== "" || data.participacao !== "" || data.renda !== "") {
            router.push('/cadastro')
        }
    }

    return (
        <article className="pt-12">
            <div className="bg-green-600 rounded-3xl p-8 max-w-4xl m-auto lg:relative bottom-36">
                <div className="md:grid md:grid-cols-2 md:relative">
                    <h3 className="text-blue-700 title-form font-semibold mb-10 md:text-white-50 ">
                        Seja um beta tester!
                    </h3>
                    <div className="hidden md:block md:absolute r--5 md:-bottom-4 lg:right-0 lg:-bottom-7">
                        <img src="/img/card_user_lg.png" alt='' />
                    </div>
                </div>
                <div className="mb-5">
                    <form name="amabank-beta-test" onSubmit={handleSubmit(onSubmit)} className="form">
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" {...register("nome", { required: true })} />
                            {errors.nome && <small>Preencha o campo nome</small>}
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" {...register('email', { required: true })} />
                            {errors.email && <small>Preencha o campo e-mail</small>}
                        </div>

                        <div className="grid-form-1">
                            <div>
                                <label htmlFor="estado" className="w-28 sm:w-3/4">Região que mora</label>
                                <select name="estado" id="estado" {...register("estado", { required: true })}>
                                    <option></option>
                                    <option value="Sul">Sul</option>
                                    <option value="Sudeste">Sudeste</option>
                                    <option value="Nordeste">Nordeste</option>
                                    <option value="Norte">Norte</option>
                                </select>
                                {errors.estado && <small>Informe o estado</small>}
                            </div>
                            <div>
                                <label className="w-28 sm:w-3/4">Data de nascimento</label>
                                <InputMask mask="99/99/9999" maskChar=" " type="text" id="data" name="data" {...register("dtnasc", { required: true })} />
                                {errors.data && <small>Informe a data de nascimento</small>}
                            </div>
                            <div>
                                <label className="w-28 sm:w-3/4">Você tem renda</label>
                                <div className="sm:mt-5 lg:mt-0">
                                    <div>
                                        <input type="radio" id="rsim" value="Sim" name="renda" {...register("renda", { required: true })} />
                                        <label className="not" htmlFor="rsim">Sim</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="rnao" value="Nao" name="renda" {...register("renda", { required: true })} />
                                        <label className="not" htmlFor="rnao">Não</label>
                                    </div>
                                </div>
                                {errors.dtnasc && <small>Informe o campo</small>}
                            </div>
                        </div>
                        <div>
                            <label>Usa banco digital? Quais? </label>
                            <input type="text" />
                        </div>
                        <div className="sm:pb-5">
                            <label className="mb-1">Você gostaria de testar nosso aplicativo?</label>
                            <div className="sm:pt-2">
                                <div className="inline-block">
                                    <input type="radio" id="csim" name="confirn_part" value="Sim" {...register("participacao", { required: true })} />
                                    <label className="not" htmlFor="csim">Sim</label>
                                </div>
                                <div className="inline-block ml-6">
                                    <input type="radio" value="Nao" id="cnao" name="confirn_part" {...register("participacao", { required: true })} />
                                    <label className="not" htmlFor="cnao">Não</label>
                                </div>
                                {errors.participacao && <small>Informe o campo</small>}
                            </div>
                        </div>
                        <div className="">
                            <label className="mb-1">Você gostaria de nos auxiliar em melhorias constantes na sua jornada como cliente</label>
                            <div className="pb-8 sm:pt-5">
                                <div className="inline-block">
                                    <input type="radio" value="Sim" id="asim" name="auxilio_app" {...register("melhorias", { required: true })} />
                                    <label className="not" htmlFor="asim">Sim</label>
                                </div>
                                <div className="inline-block ml-6">
                                    <input type="radio" value="Nao" id="anao" name="auxilio_app" {...register("melhorias", { required: true })} />
                                    <label className="not" htmlFor="anao">Não</label>
                                </div>
                                {errors.melhorias && <small>Informe o campo</small>}
                            </div>
                        </div>
                        <input type="submit" className="cursor-pointer" value="QUERO MEU CARTÃO AMABANK" />
                    </form>
                </div>
                <small className="text-blue-700 form-small md:text-white-50 ">
                    Ao enviar o formulário, declaro que tenho mais de 18 anos e ACEITO os &nbsp;
                    <Link href="/doc/TU-AmaBank.pdf" download target="_blank">
                        <span className="italic underline">Termos de Serviço</span>
                    </Link>
                    &nbsp; e &nbsp;
                    <Link href="/doc/PP-AmaBank.pdf" download target="_blank" >
                        <span className="italic underline"> Política de Privacidade</span>
                    </Link>.
                </small>
            </div>
        </article>
    )
}

export default FormRegister
