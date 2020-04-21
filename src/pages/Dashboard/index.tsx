import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/22780735?s=460&u=e6842bd327e085392747fab72fc49bbaed38d134&v=4"
            alt="Artur Brasil"
          />
          <div>
            <strong>arturmbrasil/be-the-hero</strong>
            <p>Esta é uma descricao teste...</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/22780735?s=460&u=e6842bd327e085392747fab72fc49bbaed38d134&v=4"
            alt="Artur Brasil"
          />
          <div>
            <strong>arturmbrasil/be-the-hero</strong>
            <p>Esta é uma descricao teste...</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/22780735?s=460&u=e6842bd327e085392747fab72fc49bbaed38d134&v=4"
            alt="Artur Brasil"
          />
          <div>
            <strong>arturmbrasil/be-the-hero</strong>
            <p>Esta é uma descricao teste...</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/22780735?s=460&u=e6842bd327e085392747fab72fc49bbaed38d134&v=4"
            alt="Artur Brasil"
          />
          <div>
            <strong>arturmbrasil/be-the-hero</strong>
            <p>Esta é uma descricao teste...</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
