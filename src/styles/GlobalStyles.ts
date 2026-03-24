'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Inter', sans-serif, Arial;
    background-color: #F8FAF9;
    color: #1F1F1F;
  }

  button { cursor: pointer; border: none; transition: 0.2s; }
  a { text-decoration: none; transition: 0.2s; }
`;