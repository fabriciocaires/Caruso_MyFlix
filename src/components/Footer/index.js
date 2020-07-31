import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
         <a href="https://github.com/fabriciocaires">
         <img className = "Logo" src= {Logo} alt= "MyFlix Logo" />
      </a>
      <p>
        Criado por Caruso_Val durante a
        {' '}
        <a href="https://github.com/fabriciocaires">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
