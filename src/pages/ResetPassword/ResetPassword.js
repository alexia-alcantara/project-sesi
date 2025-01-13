import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ResetPassword.css';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaInfoCircle } from 'react-icons/fa';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


const ResetPassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [step, setStep] = useState(1); 
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (step === 1) {
      setStep(2); // Avança para o passo 2
    } else if (step === 2) {
      setStep(3); // Avança para o passo 3
    } else if (step === 3) {
      console.log('Dados do formulário:', data);
      setStep(4); 
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
  };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
  };
  
  const open = Boolean(anchorEl);

  const [otp, setOtp] = useState(new Array(4).fill(''));

  function handleChange(e, index) {
    if (isNaN(e.target.value)) return false;

    setOtp([...otp.map((data, idx) => (idx === index ? e.target.value : data))]);

    if (e.target.value && e.target.nextType) {
      e.target.nextType.focus();
    }
  }

  return (
    <div className="login-container flex flex-row h-full">
      <div className="box-left flex justify-center relative overflow-hidden flex-1">
        <div className="login-overlay relative w-full text-center">
          <img
            src={require('../../assets/imagem-sobrepor.png')}
            alt="Menina sorrindo"
            className="login-image flex w-full relative z-1 h-full object-fill"
          />
        </div>
      </div>

      <div className="box-right flex flex-col justify-center items-center p-5 -ml-48">
        <div className="login-form">
          <img
            src={require('../../assets/sesi.png')}
            alt="Editora SESI MINAS"
            className="login-logo"
          />

          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <>
                <h1>Recuperação de senha!</h1>
                <p className="text-description mb-8">
                  Nós encaminharemos um e-mail com um código para que você redefina a sua senha.
                </p>
                <div>
                  <label type="password">E-mail</label>
                  <input type="email" id="email" placeholder="Digite seu e-mail" required />
                </div>

                <div className="flex justify-between gap-5 mt-5">
                <button type="submit" className="button-back w-full">

                    Voltar
                  </button>
                  <button type="submit" className="login-button">
                    Enviar
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h1>Recuperação de senha!</h1>
                <p className='mb-4'>E-mail enviado! </p>
                <p className="text-description mb-8">
                  Verifique sua caixa de entrada e, se necessário, a pasta de spam. <span className='font-bold'>Informe o código
                  recebido:</span>
                </p>

                <div className="otp-area pb-5">
                  {otp.map((data, i) => {
                    return (
                      <input
                        type="text"
                        value={data}
                        maxLength={1}
                        onChange={(e) => handleChange(e, i)}
                      />
                    );
                  })}
                </div>

                <button type="submit" className="login-button" onClick={() => setStep(3)}>
                  Validar
                </button>

                <div className="flex flex-col align-baseline mt-4">
                  <div className="reset mt-2">
                    <Link to="/redefinir-senha">Não recebeu o e-mail?</Link>
                  </div>

                  <button type="submit" className="button-back w-full">
                    Reenviar o e-mail
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h1>Recuperação de senha!</h1>
                <p>Redefina sua senha</p>

                <div className="input-field relative">
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
                            <Typography sx={{ p: 1 }} className='font-bold title-popover'>Orientações<br>
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
                    id="password"
                    placeholder="Digite sua senha"
                    {...register('password', {
                      required: 'Crie sua senha',
                      minLength: {
                        value: 6,
                        message:
                          'Sua senha deve conter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número, 1 caractere especial',
                      },
                    })}
                  />

                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500">{errors.password?.message}</p>
                  )}

                  <span className="absolute -right-3.5 top-10">
                    <button type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                      {isPasswordVisible ? (
                        <FaEye className="icon" />
                      ) : (
                        <FaEyeSlash className="icon" />
                      )}
                    </button>
                  </span>
                </div>

                <div className="input-field relative">
                  <label>Confirmar Senha</label>
                  <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    id="confirmPassword"
                    placeholder="Confirme sua senha"
                    {...register('confirmPassword', {
                      required: 'A confirmação de senha é obrigatória',
                      validate: (value) =>
                        value === getValues('password') || 'As senhas não coincidem',
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>
                  )}
                  <span className="absolute -right-3.5 top-10">
                    <button type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                      {isPasswordVisible ? (
                        <FaEye className="icon" />
                      ) : (
                        <FaEyeSlash className="icon" />
                      )}
                    </button>
                  </span>
                </div>
                <button type="submit" className="login-button mt-3">
                  Salvar
                </button>
              </>
            )}

            {step === 4 && (
              <>
                <h1>Recuperação de senha</h1>
                <p className="text-black mb-4 italic ">Redefina sua senha</p>
                <p className='text-black mb-4 font-light italic'>Sua senha foi redefinida com sucesso!</p>
                
                <Link to="/login">
                    <button type="submit" className="login-button">
                        Voltar para o login
                    </button>
                </Link>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
