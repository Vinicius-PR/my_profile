import styled from "styled-components";
import img from '../../assets/programming.jpg'

export const Container = styled.div `
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: calc(100vh - 60px);
  z-index: -1;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const Overlay = styled.div `
  height: 60%;
  width: 60%;

  background-color: rgba(99, 85, 78, 0.733);
  text-align: center;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;

  h1, h2 {
    margin-bottom: 2rem;
  };

  h2, p {
    font-weight: 600;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 426px) {
    height: 100%;
    width: 100%;
  }
`;