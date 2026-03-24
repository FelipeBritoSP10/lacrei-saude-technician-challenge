import { NavWrapper, Flex, Logo, Menu } from "./styles";
import { Container } from "../Container";

export default function Header() {
  return (
    <NavWrapper as="header" role="banner">
      <Container>
        <Flex>
          <Logo aria-label="Lacrei Saúde Home">LACREI_SAÚDE</Logo>
          <Menu aria-label="Menu principal">
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Quem Somos</a></li>
            </ul>
          </Menu>
        </Flex>
      </Container>
    </NavWrapper>
  );
}