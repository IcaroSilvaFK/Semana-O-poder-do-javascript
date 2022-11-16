import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  background: ${({ theme }) => theme.colors.red[500]};
`;

export const SubContainer = styled.div`
  max-width: 1200px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.white};
  margin: auto;
  padding: 22px 0;

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 4px;

    strong {
      font-size: 2rem;
      text-transform: uppercase;

      letter-spacing: 1px;
    }

    span {
      font-size: 0.875rem;
    }
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  h1 {
    text-transform: uppercase;
    span {
      font-weight: 300;
    }
  }
`;
