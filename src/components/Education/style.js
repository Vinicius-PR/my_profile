import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  padding: 1rem 8rem;
  margin: 0 auto;
  margin-top: 2rem;
  position: relative;

  @media(max-width: 768px) {
      padding: 1rem 2rem;
    }

  /* To fix the position of the id span when on mobile */
  #education {
      position: absolute;
      @media(max-width: 768px) {
          top: -50px;
      }
  }

  strong {
    display: block;
    margin: 1rem 0;
  }
  
  h1,h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  ul {
    li {
      list-style: square;
    }
  }
`;