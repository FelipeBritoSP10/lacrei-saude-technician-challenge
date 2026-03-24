'use client'
import styled from "styled-components";

export const HeroWrapper = styled.section`
  padding: 120px 0 80px;
  background: radial-gradient(circle at top right, #E8F5EC 0%, #FFFFFF 100%);
`;

export const ContentHeader = styled.div`
  max-width: 800px;
  margin-bottom: 64px;
`;

export const Title = styled.h1`
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 900;
  color: #1F1F1F;
  line-height: 0.9;
  letter-spacing: -4px;
  margin-bottom: 24px;
  
  span { 
    color: #018762; 
    display: block; 
    font-size: 0.6em; 
    letter-spacing: 0;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #515151;
  line-height: 1.6;
  max-width: 600px;
`;

export const BtnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 60px;
  
  @media (max-width: 900px) { 
    grid-template-columns: 1fr; 
  }
`;

// O COMPONENTE QUE ESTAVA FALTANDO EXPORTAR:
export const ActionBtn = styled.button<{ $variant?: 'solid' | 'outline' }>`
  height: 80px;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  background: ${props => props.$variant === 'solid' ? '#018762' : 'white'};
  color: ${props => props.$variant === 'solid' ? 'white' : '#018762'};
  border: 3px solid #018762;

  &:hover {
    transform: translateY(-5px);
    background: #1F1F1F;
    border-color: #1F1F1F;
    color: white;
  }

  &:focus {
    outline: 4px solid #018762;
    outline-offset: 4px;
  }
`;

export const StatsGrid = styled.div`
  display: flex;
  gap: 48px;
  margin-top: 80px;
  padding-top: 40px;
  border-top: 1px solid #E8F5EC;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-size: 2.5rem;
    font-weight: 900;
    color: #018762;
    letter-spacing: -1px;
  }

  p {
    font-size: 1rem;
    font-weight: 700;
    color: #1F1F1F;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;