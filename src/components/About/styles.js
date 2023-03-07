import styled from "styled-components";

export const Container = styled.section`
  padding: 0 2rem;
  padding-top: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  h1 {
    @media (max-width: 768px) {
      margin-top: 60px;
    }
  }

  @media (max-width: 768px) {
    padding-left: 0rem;
    padding-right: 0rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    padding-bottom: 1rem;
  }
  p {
    text-align: justify;
    line-height: 25px;
    width: 80%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
      padding-bottom: 1rem;
    }
    @media (max-width: 425px) {
      width: 250px;
      height: 250px;
    }
    @media (max-width: 319px) {
      width: 200px;
      height: 200px;
    }
  }
`;
