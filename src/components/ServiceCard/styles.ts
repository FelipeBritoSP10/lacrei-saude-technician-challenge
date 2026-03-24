'use client'
import styled from "styled-components";

export const ServicesSection = styled.section`
  padding: 100px 0;
  background-color: #FFFFFF;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 260px;
  gap: 24px;
  margin-top: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: auto;
  }
`;

export const ServiceCard = styled.article<{ $span: number; $variant?: 'green' | 'light' }>`
  grid-column: span ${props => props.$span};
  background: ${props => 
    props.$variant === 'green' ? '#018762' : 
    props.$variant === 'light' ? '#E8F5EC' : '#F8FAF9'};
  
  color: ${props => props.$variant === 'green' ? '#FFFFFF' : '#1F1F1F'};
  
  border-radius: 40px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid #E8F5EC;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;

  .tag {
    position: absolute;
    top: 40px;
    left: 40px;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.6;
  }

  h3 {
    font-size: ${props => props.$span > 4 ? '2.5rem' : '1.5rem'};
    font-weight: 900;
    line-height: 1;
    margin-bottom: 12px;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.8;
    max-width: 320px;
    line-height: 1.4;
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 30px 60px rgba(1, 135, 98, 0.15);
    border-color: #018762;
  }

  &:focus {
    outline: 4px solid #018762;
    outline-offset: 8px;
  }

  @media (max-width: 1024px) {
    grid-column: span 6;
    min-height: 280px;
  }

  @media (max-width: 768px) {
    grid-column: span 12;
    padding: 32px;
    h3 { font-size: 1.8rem; }
  }
`;