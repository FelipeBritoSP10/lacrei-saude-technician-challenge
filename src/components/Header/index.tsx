import Link from "next/link";
import { NavWrapper, Flex, Logo, Menu } from "./styles";
import { Container } from "../Container";

export default function Header() {
  return (
    <NavWrapper as="header" role="banner">
      <Container>
        <Flex>

          <Logo>
            <Link href="/">LACREI_SAÚDE</Link>
          </Logo>

          <Menu aria-label="Menu principal">
            <ul>

              <li>
                <Link href="/">Início</Link>
              </li>

              <li>
                <Link href="/">Serviços</Link>
              </li>

              <li>
                <Link href="/">Quem Somos</Link>
              </li>

              <li>
                <Link href="/cadastro">Cadastro</Link>
              </li>

            </ul>
          </Menu>

        </Flex>
      </Container>
    </NavWrapper>
  );
}