import styled from "styled-components";

export const Container = styled.section`
  max-width: 1440px;
  padding: 0 2rem;
  margin: 0 auto;
  margin-top: 2rem;
  position: relative;

  #projects {
    position: absolute;
    @media (max-width: 768px) {
      top: -50px;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;
