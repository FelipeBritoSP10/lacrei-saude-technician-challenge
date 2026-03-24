import { Foot, FooterGrid, BrandArea, LinkGroup, BottomBar } from "./styles";
import { Container } from "../Container";

export default function Footer() {
  return (
    <Foot role="contentinfo">
      <Container>
        <FooterGrid>
          <BrandArea>
            <span className="logo">Lacrei Saúde</span>
            <p>Uma plataforma segura para conectar a comunidade LGBTQIAPN+ a profissionais de saúde qualificados.</p>
          </BrandArea>

          <LinkGroup>
            <h4>Institucional</h4>
            <nav aria-label="Links institucionais">
              <ul>
                <li><a href="#">Quem Somos</a></li>
                <li><a href="#">Nossa Missão</a></li>
                <li><a href="#">Privacidade</a></li>
              </ul>
            </nav>
          </LinkGroup>

          <LinkGroup>
            <h4>Redes Sociais</h4>
            <nav aria-label="Nossas redes sociais">
              <ul>
                <li><a href="#" target="_blank" rel="noopener">Instagram</a></li>
                <li><a href="#" target="_blank" rel="noopener">LinkedIn</a></li>
                <li><a href="#" target="_blank" rel="noopener">Facebook</a></li>
              </ul>
            </nav>
          </LinkGroup>
        </FooterGrid>

        <BottomBar>
          <p>© {new Date().getFullYear()} Lacrei Saúde. Todos os direitos reservados.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {/* Ícones ou links extras podem vir aqui */}
          </div>
        </BottomBar>
      </Container>
    </Foot>
  );
}