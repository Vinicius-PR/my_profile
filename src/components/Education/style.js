import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  padding: 1rem 8rem;
  margin: 0 auto;
  margin-top: 2rem;

  @media(max-width: 768px) {
      padding: 1rem 2rem;
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