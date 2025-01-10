import React, { useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { withMask } from 'use-mask-input';
import './RegisterTeacher.css'

const RegisterTeacher = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const { handleSubmit, register, formState: { isSubmitting, errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

  return (
    <div className="login-container flex flex-row h-full">
    <div className='box-left flex justify-center relative overflow-hidden flex-1'>
         <div className="login-overlay relative w-full text-center">
           <img
               src={require("../../assets/imagem-sobrepor.png")}
               alt="Menina sorrindo"
               className="login-image flex w-full relative z-1 h-full object-fill"
           />
         </div>
         
    </div>

    <div className='box-right flex flex-col justify-center items-center p-5 -ml-48'>
     
     <div className='login-form'>
         <img src={require("../../assets/sesi.png")}
             alt="Editora SESI MINAS"
             className="login-logo" />

       <h1>Criar Conta</h1>


       <p>Preencha os dados abaixo para criar sua conta.</p>

       <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <label>Nome Completo</label>
                    <input type="text" id="name" {...register('name', {
                        required: 'Este campo é obrigatório'
                    })}
                    placeholder="Digite seu nome completo" 
                     />
                     {/* Sugestão de exibir erro de validação */}
                     {/* <div className='min-h-4'>
                        <p className='text-xs text-red-400 mt-1'> {errors.name?.message}</p>
                     </div> */}
                </div>

                <div className='form-group'>
                    <label>CPF</label>
                    <input type="text" id="cpf" ref={withMask('999.999.999-99')} />                
                </div>

                <div className='form-group'>
                    <label type="password">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" {...register('email')} />
                </div>

                <div className='input-field relative'>
                    <label type="password">Senha</label>
                    <input type={isPasswordVisible ? 'text' : 'password'} 
                    id="password" 
                    placeholder="Digite sua senha" 
                    {...register('password', {
                        required: 'Sua senha deve conter no mínimo',
                        minLength: {
                            value: 6,
                            message: 'Sua senha deve conter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número, 1 caractere especial'
                        },
                    })}                  
                    />

                    {errors.password && (
                        <p className='mt-1 text-xs text-red-400'>
                            {errors.password?.message}
                        </p>
                    )}

                    <span className='absolute -right-3.5 top-10'>
                        <button type='button' onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                            {isPasswordVisible ? (
                                <FaEye className="icon"/>
                                
                            ) : (
                                <FaEyeSlash className='icon'/>
                            )
                        }
                        </button>
                    </span>
                </div>

                <div className='input-field relative pb-5'>
                    <label >Confirmar Senha</label>
                    <input type={isPasswordVisible ? 'text' : 'password'} id="password" placeholder="Digite sua senha"
                        required
                    />
                      <span className='absolute -right-3.5 top-10'>
                        <button type='button' onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                            {isPasswordVisible ? (
                                <FaEye className="icon"/>
                                
                            ) : (
                                <FaEyeSlash className='icon'/>
                            )
                        }
                        </button>
                    </span>
                </div>
                <button type="submit" className="login-button">Finalizar Cadastro</button>

            </form>
     </div>
      
     </div>
 </div>
  )
}

export default RegisterTeacher
