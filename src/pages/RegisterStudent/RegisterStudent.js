import React, { useState, } from 'react'
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import './RegisterStudent.css'


import Modal from 'react-modal';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

const RegisterStudent = () => {
const [isPasswordVisible, setIsPasswordVisible] = useState(false);
const { handleSubmit, register, getValues, formState: { isSubmitting, errors}} = useForm();
const onSubmit = (data) =>{
    console.log(data);
    setModalIsOpen(true);
}

const handleCloseModal = () => {
    setModalIsOpen(false);
    navigate('/login');
    };
        
console.log(errors);

const [modalIsOpen, setModalIsOpen] = useState(false);
const navigate = useNavigate();

const [anchorEl, setAnchorEl] = React.useState(null);

const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
};

  const handlePopoverClose = () => {
    setAnchorEl(null);
};

const open = Boolean(anchorEl);

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
                <div className='form-group pb-3'>
                    <label>Nome Completo</label>
                    <input 
                    type="text" 
                    id="name" 
                    {...register('name', {
                        required: 'Este campo é obrigatório'
                    })}
                    placeholder="Digite seu nome completo" 
                    />
                    {errors.name && (
                        <p className='text-xs text-red-500 mt-1'>
                            {errors.name.message}
                        </p>
                    )}
                </div>
    
                    <div className='form-group pb-3'>
                        <label>E-mail</label>
                        <input type="email" id="email" placeholder="Digite seu e-mail" {...register('email', {
                                required: 'O e-mail é obrigatório',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Formato de e-mail inválido'
                                }
                            })} 
                        />
                        {errors.email && (
                            <p className='text-xs text-red-500 mt-1'>
                                {errors.email.message}
                            </p>
                        )}
                    </div>
    
                    <div className='input-field relative pb-3'>
                        <label>Senha</label>
                        <input type={isPasswordVisible ? 'text' : 'password'} 
                        id="password" 
                        placeholder="Digite sua senha" 
                        {...register('password', {
                            required: 'Cria sua senha',
                            minLength: {
                                value: 6,
                                message: 'Sua senha deve conter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número, 1 caractere especial'
                            },
                        })}                  
                        />
    
                        {errors.password && (
                            <p className='mt-1 text-xs text-red-500'>
                                {errors.password?.message}
                            </p>
                        )}
    
                        <span className='absolute -right-3.5 top-10'>
                            <button type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                                {isPasswordVisible ? (
                                    <FaEye className="icon"/>
                                    
                                ) : (
                                    <FaEyeSlash className='icon'/>
                                )
                            }
                            </button>
                        </span>
                    </div>
    
                    <div className='input-field relative pb-3'>
                       <div className="flex justify-between items-center">
                       <label>Confirmar Senha</label>
                       <FaInfoCircle className='icon-info cursor-pointer ml-4' aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose} />
                       
                        <Popover
                            id="mouse-over-popover"
                            sx={{ pointerEvents: 'none' }}
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                        >
                            <Typography sx={{ p: 1 }} className='font-bold title-popover'>Orientação<br>
                            </br>
                            <p className='list-popover font-light'>Sua senha deve conter no mínimo:
                                <ul>
                                    <li>8 caracteres</li>
                                    <li>1 letra maiúscula</li>
                                    <li>1 letra minúscula</li>
                                    <li>1 número</li>
                                    <li>1 caractere especial</li>
                                </ul>
                            </p>
                            </Typography>
                        </Popover>
                      
                       </div>
                        <input 
                            type={isPasswordVisible ? 'text' : 'password'} 
                            id="confirmPassword" 
                            placeholder="Confirme sua senha" 
                            {...register('confirmPassword', {
                                required: 'A confirmação de senha é obrigatória',
                                validate: (value) =>
                                    value === getValues('password') || 'As senhas não coincidem'
                            })} 
                        />
                        {errors.confirmPassword && (
                            <p className='text-xs text-red-500 mt-1'>
                                {errors.confirmPassword.message}
                            </p>
                        )}
                         <span className='absolute -right-3.5 top-10'>
                            <button type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                                {isPasswordVisible ? (
                                    <FaEye className="icon"/>
                                    
                                ) : (
                                    <FaEyeSlash className='icon'/>
                                )
                            }
                            </button>
                        </span>
                    </div>
                    <button type="submit" className="login-button mt-3">Finalizar Cadastro</button>
    
                </form>
         </div>
          
         </div>
    
         {/* Modal de confirmação */}
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Confirmação"
            style={customStyles}
            ariaHideApp={false} 
          >
            <div className="modal-content">
              <h2>Cadastro Concluído!</h2>
              <p>Conta criada com sucesso!</p>
              <button onClick={handleCloseModal}>Fechar</button>
            </div>
          </Modal>
          
     </div>
  )
}

export default RegisterStudent
