import styled from "styled-components";

export const Wrapper = styled.main`
  padding: 60px 20px;
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0,0,0,0.08);
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    font-weight: 500;
    margin-bottom: -8px;
    color: #444;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline-color: #22c55e;
`;

export const Button = styled.button`
  padding: 12px;
  border: none;
  background: #22c55e; /* Verde principal */
  color: white;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #16a34a; /* Verde um pouco mais escuro no hover */
  }
`;