import React from 'react'
import {FaEye} from "react-icons/fa";
import "./Login.css"
import { Link } from 'react-router-dom';



const Login = () => {
    return (
        <div className="login-container flex flex-col lg:flex-row h-full">
          <div className="box-left flex justify-center relative overflow-hidden flex-1 lg:w-1/2">
            <div className="login-overlay relative w-full text-center">
              <img
                src={require("../../assets/imagem-sobrepor.png")}
                alt="Menina sorrindo"
                className="login-image flex w-full relative z-1 h-full object-fill"
              />
            </div>
          </div>
      
          <div className="box-right flex flex-col justify-center items-center p-5 -ml-48 lg:p-16 lg:ml-0">
            <div className="login-form">
              <img
                src={require("../../assets/sesi.png")}
                alt="Editora SESI MINAS"
                className="login-logo"
              />
      
              <form>
                <h1 >
                  Olá, seja bem-vindo!
                </h1>
                <div>
                  <label>
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    required
                  />
                </div>
      
                <div className="input-field relative">
                  <label htmlFor="password">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                    required
                    
                  />
                  <FaEye className="icon" />
                  <div className="forgot-password mt-2 pb-5">
                    <Link to="/redefinir-senha">
                      Esqueci minha senha
                    </Link>
                  </div>
                </div>
      
                <button type="submit" className="login-button">
                  Entrar
                </button>
      
                <div className="signup text-center py-6">
                  <p className="text-sm">
                    Ainda não tem uma conta?{" "}
                    <Link to="/register" className="signup-link">
                      Cadastre-se
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
      
}

export default Login