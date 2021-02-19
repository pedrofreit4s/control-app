import React from 'react';
import { RouterProps } from 'react-router-dom';
import AuthTemplate from '../../templates/auth';

const Login = (p: RouterProps) => {
  return (
    <AuthTemplate title="Faça o seu login!">
      <div className="card">
        <div className="logo">
          <svg
            width="62"
            height="45"
            viewBox="0 0 62 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.22 44.105C38.7867 42.5883 37.7683 39.1 36.165 33.64C34.605 28.18 32.915 22.4817 31.095 16.545H30.705L21.475 42.675L17.315 44.105C16.7083 41.9383 15.3 37.1717 13.09 29.805C10.9233 22.4383 8.71333 15.2233 6.46 8.16C6.07 6.90333 5.39833 5.99333 4.445 5.43C3.49167 4.82333 2.21333 4.49833 0.61 4.455L0.545 4.195L0.935 1.4C1.49833 1.4 2.51667 1.44333 3.99 1.53C5.46333 1.57333 6.89333 1.595 8.28 1.595C10.1867 1.595 12.0933 1.50833 14 1.335C15.9067 1.11833 17.1417 0.966665 17.705 0.88L17.9 1.335L17.64 3.87C15.43 4.04333 13.935 4.30333 13.155 4.65C12.4183 4.99667 12.05 5.625 12.05 6.535C12.05 7.27166 12.635 9.89333 13.805 14.4C15.0183 18.8633 16.2533 23.3483 17.51 27.855C18.81 32.3617 19.655 35.3083 20.045 36.695H20.435L29.6 11.735L28.43 8.16C27.9967 6.90333 27.325 5.99333 26.415 5.43C25.505 4.86667 24.2267 4.54166 22.58 4.455L22.45 4.195L22.905 1.4C23.4683 1.4 24.4867 1.44333 25.96 1.53C27.4333 1.57333 28.8633 1.595 30.25 1.595C31.8967 1.595 33.7167 1.50833 35.71 1.335C37.7467 1.11833 39.0683 0.966665 39.675 0.88L39.87 1.335L39.61 3.87C37.3567 4.04333 35.84 4.30333 35.06 4.65C34.3233 4.99667 33.955 5.64667 33.955 6.6C33.955 7.51 35.0817 12.0167 37.335 20.12C39.5883 28.2233 41.1483 33.7483 42.015 36.695H42.405C42.4917 36.435 42.5783 36.175 42.665 35.915C42.795 35.6117 42.925 35.265 43.055 34.875C49.6417 17.195 52.935 7.72666 52.935 6.47C52.935 5.64666 52.5883 5.06166 51.895 4.715C51.2017 4.36833 50.075 4.195 48.515 4.195H45.265L45.135 3.935L45.59 1.14C46.1533 1.18333 47.3667 1.27 49.23 1.4C51.0933 1.53 52.8917 1.595 54.625 1.595C56.185 1.595 57.615 1.57333 58.915 1.53C60.215 1.48666 61.0817 1.44333 61.515 1.4L61.06 4.455C59.76 4.54166 58.85 4.78 58.33 5.17C57.81 5.51667 57.3333 6.31833 56.9 7.575L43.25 42.675L39.22 44.105Z"
              fill="#3752FF"
            />
          </svg>
        </div>
        <h3>Faça login para continuar</h3>
        <p>acesse sua conta, ou crie uma caso não tenha</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="tt-input-group">
            <label htmlFor="email" className="tt-label">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="tt-input"
              placeholder="Endereço de e-mail"
            />
          </div>
          <div className="tt-input-group">
            <div className="tt-password_rec">
              <label htmlFor="password" className="tt-label">
                Senha
              </label>
              <button>esqueceu a senha?</button>
            </div>
            <input
              id="password"
              type="password"
              className="tt-input"
              placeholder="Digite a senha"
            />
          </div>
          <button type="submit">
            <div className="loader">Loading...</div>
          </button>
        </form>
        <div className="no-account">
          <button>
            Não tem uma conta? <span>Crie uma!</span>
          </button>
        </div>
      </div>
    </AuthTemplate>
  );
};

export default Login;
