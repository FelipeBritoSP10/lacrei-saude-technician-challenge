'use client'
import styled from "styled-components";

export const NavWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 2px solid #E8F5EC; 
  padding: 16px 0;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 520px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: #018762; 
  text-transform: none; 
  letter-spacing: -1.5px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    gap: 60px; /* O espaçamento de 60px que você pediu */
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    font-size: 16px;
    font-weight: 700; 
    color: #1F1F1F; 
    text-decoration: none;
    transition: all 0.2s ease;
    display: inline-block; /* Garante que o padding/espaço funcione bem */

    &:hover { 
      color: #018762; 
      transform: translateY(-1px);
    }

    &:focus {
      outline: 2px solid #018762;
      outline-offset: 4px;
      border-radius: 4px;
    }
  }

  @media (max-width: 768px) {
    ul {
      gap: 30px; /* Diminui o espaço no mobile para não vazar a tela */
    }
  }
`;