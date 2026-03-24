'use client'
import styled from "styled-components";

export const Foot = styled.footer`
  padding: 64px 0 32px;
  border-top: 1px solid #E8F5EC;
  background-color: #FFFFFF;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const BrandArea = styled.div`
  .logo {
    font-weight: 900;
    color: #018762; /* Verde Oficial Marsha */
    font-size: 24px;
    letter-spacing: -1px;
    margin-bottom: 16px;
    display: block;
  }

  p {
    color: #515151; /* Cinza de alto contraste */
    font-size: 16px;
    max-width: 300px;
    line-height: 1.5;
  }
`;

export const LinkGroup = styled.div`
  h4 {
    color: #1F1F1F;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 12px;
      
      a {
        color: #515151;
        font-weight: 700;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
          color: #018762;
        }
      }
    }
  }
`;

export const BottomBar = styled.div`
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #EEEEEE;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 14px;
    color: #515151;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;