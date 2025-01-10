import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
const [otp, setOtp] = useState(new Array(4).fill(""));

function handleChange(e, index){
    if(isNaN(e.target.value)) return false

    setOtp([...otp.map((data, idx) => (idx === index? e.target.value:data))]);

    if(e.target.value && e.target.nextType){
        e.target.nextType.focus()
    }
}
    
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


          <p>Insira o código de acesso recebido em seu e-mail.</p>

          <div className='otp-area pb-5'>
            { otp.map((data, i) => {
                    return <input type='text' 
                    value={data}
                    maxLength={1}
                    onChange={(e)=>handleChange(e, i)}/>
                }
            )
            }
          </div>


          <Link to="/registro-professor">
            <button type="submit" className="login-button">Validar</button>
          </Link>

          <div className='signup text-center py-6'>
              <p>Já possui uma conta?  
              <Link to="/login" className="signup-link">
              Faça Login
              </Link>
              </p>
              
          </div>
        </div>
         
        </div>
    </div>
  )
}

export default Register
