import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,body,#root{
    width: 100%;
    height: 100%;

    font-size: ${({ theme }) => theme.sizes.medium};
    font-family: ${({ theme }) => theme.fonts.poppins};
  }

  input,button{
    border: 0;
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  ul,ol{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

`;
