import { ServicesSection, Grid, ServiceCard } from "./styles";
import { Container } from "../Container";

const specialties = [
  { id: "01", title: "Ginecologia", desc: "Cuidado humanizado para pessoas trans e cis.", span: 8, variant: 'light' },
  { id: "02", title: "Psicologia", desc: "Apoio emocional sem barreiras.", span: 4 },
  { id: "03", title: "Endocrino", desc: "Acompanhamento hormonal seguro.", span: 4 },
  { id: "04", title: "Urologia", desc: "Atendimento direto e respeitoso.", span: 8, variant: 'green' },
];

export default function Services() {
  const handleSelect = (name: string) => {
    alert(`Especialidade selecionada: ${name}`);
  };

  return (
    <ServicesSection id="especialidades">
      <Container>
        <header style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#1F1F1F', letterSpacing: '-2px' }}>
            Nossas <span style={{ color: '#018762' }}>Especialidades</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#515151', marginTop: '16px' }}>
            Conectamos você a profissionais que entendem e respeitam a jornada LGBTQIAPN+.
          </p>
        </header>

        <Grid role="list" aria-label="Lista de especialidades médicas">
          {specialties.map((item) => (
            <ServiceCard 
              key={item.id} 
              $span={item.span} 
              $variant={item.variant as any}
              role="listitem"
              tabIndex={0}
              onClick={() => handleSelect(item.title)}
              aria-label={`Ver mais sobre ${item.title}`}
            >
              <span className="tag">{item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </ServiceCard>
          ))}
        </Grid>
      </Container>
    </ServicesSection>
  );
}