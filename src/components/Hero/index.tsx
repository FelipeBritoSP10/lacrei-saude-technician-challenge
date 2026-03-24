import { 
  HeroWrapper, 
  Title, 
  BtnGrid, 
  ActionBtn, 
  Subtitle, 
  ContentHeader,
  StatsGrid,
  StatItem 
} from "./styles";
import { Container } from "../Container";

export default function Hero() {
  const handleClick = (label: string) => alert(`Ação: ${label}`);

  return (
    <HeroWrapper>
      <Container>
        <ContentHeader>
          <Title>
            Saúde inclusiva. 
            <span>Para todos.</span>
          </Title>
          <Subtitle>
            A Lacrei Saúde conecta a comunidade LGBTQIAPN+ a profissionais 
            qualificados, garantindo um atendimento seguro, respeitoso e sem barreiras.
          </Subtitle>
        </ContentHeader>

        {/* REQUISITO: Três botões interativos com acessibilidade */}
        <BtnGrid role="group" aria-label="Ações principais de acesso">
          <ActionBtn 
            $variant="solid" 
            onClick={() => handleClick('Paciente')} 
            aria-label="Área da Pessoa Usuária"
          >
            Pessoa Usuária <span>→</span>
          </ActionBtn>
          
          <ActionBtn 
            onClick={() => handleClick('Profissional')} 
            aria-label="Área do Profissional de Saúde"
          >
            Profissional <span>→</span>
          </ActionBtn>
          
          <ActionBtn 
            onClick={() => handleClick('Missão')} 
            aria-label="Conheça nossa missão e valores"
          >
            Nossa Missão <span>→</span>
          </ActionBtn>
        </BtnGrid>

        {/* EXTRA: Indicadores de Impacto (Diferenciação Visual) */}
        <StatsGrid>
          <StatItem>
            <span>+10k</span>
            <p>Atendimentos</p>
          </StatItem>
          <StatItem>
            <span>4.9/5</span>
            <p>Avaliação Média</p>
          </StatItem>
          <StatItem>
            <span>100%</span>
            <p>Acolhimento</p>
          </StatItem>
        </StatsGrid>
      </Container>
    </HeroWrapper>
  );
}