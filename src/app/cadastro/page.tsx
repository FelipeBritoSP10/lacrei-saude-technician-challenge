import Header from "../../components/Header";
import { Wrapper, FormContainer, Title, Form, Input, Button } from "./styles";

export default function Cadastro() {
  return (
    <>
      <Header />

      <Wrapper>
        <FormContainer>
          <Title>Cadastro</Title>

          <Form>
            <label htmlFor="nome">Nome</label>
            <Input id="nome" type="text" placeholder="Seu nome completo" />

            <label htmlFor="email">Email</label>
            <Input id="email" type="email" placeholder="exemplo@email.com" />

            <label htmlFor="telefone">Telefone</label>
            <Input id="telefone" type="tel" placeholder="(00) 00000-0000" />

            <Button type="submit">Cadastrar</Button>
          </Form>
        </FormContainer>
      </Wrapper>
    </>
  );
}