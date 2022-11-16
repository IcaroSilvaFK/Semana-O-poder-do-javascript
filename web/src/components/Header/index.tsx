import { Container, ContainerLogo, SubContainer } from './styles';

export function Header() {
  return (
    <Container>
      <SubContainer>
        <div>
          <strong>Pedidos</strong>
          <span>Acompanhe os pedidos dos clientes</span>
        </div>
        <ContainerLogo>
          <img src="/assets/ilustra.png" alt="Garçons" />
          <div>
            <h1>
              waiters<span>app</span>
            </h1>
            <span>O App do Garçom</span>
          </div>
        </ContainerLogo>
      </SubContainer>
    </Container>
  );
}
