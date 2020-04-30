import { createGlobalStyle } from 'styled-components';
import logoGitHub from '../assets/logoGit.svg';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    text-decoration:none;
    list-style:none;
  }

  body{
    background: #F0F0F5 url(${logoGitHub}) no-repeat 70% top;
    -webkit-font-smmothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }

  body, input, button{
    font: 16px sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
  button{
    cursor: pointer;
  }

  p{
    font-size:18px;
    color: #a8a8b3;
    margin-top: 4px;
  }

`;
