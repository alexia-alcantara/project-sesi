import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
        <div  className="teste">
        <div className="login-left">
            <div className="login-overlay">
            <img
                src={require("../../assets/imagem-sobrepor.png")}
                alt="Menina sorrindo"
                className="login-image"
            />
            </div>
        </div>
        <div className="login-right">
            <div className="login-form">
            <img
                src={require("../../assets/sesi.png")}
                alt="Editora SESI MINAS"
                className="login-logo"
            />
            <h2>Olá, seja bem-vindo!</h2>
            <form>
                <label htmlFor="email">E-mail</label>
                <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                required
                />
                <label htmlFor="password">Senha</label>
                <div className="password-input">
                <input
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                    required
                />
                <button type="button" className="show-password">
                    👁️
                </button>
                </div>
                <a href="/recuperar-senha" className="forgot-password">
                Esqueci minha senha
                </a>
                <button type="submit" className="login-button">
                Entrar
                </button>
            </form>
            <p>
                Ainda não tem uma conta?{" "}
                <a href="/cadastro" className="signup-link">
                Cadastre-se
                </a>
            </p>
            </div>
        </div>
      </div>
      <footer className="login-footer">
        <p>Federação das Indústrias do Estado de Minas Gerais</p>
        <p>Av. do Contorno, 4456 – Funcionários</p>
        <p>Belo Horizonte/MG – CEP: 30110-028</p>
        <div className="footer-icons">
          {/* Aqui você pode adicionar os ícones de redes sociais */}
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
