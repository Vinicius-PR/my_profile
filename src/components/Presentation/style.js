import styled from "styled-components";
import img from "../../assets/programming.jpg";

export const Container = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: calc(100vh - 90px); //100vh - height of the header
  z-index: -1;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const Overlay = styled.div`
  height: 60%;
  width: 60%;

  background-color: rgba(99, 85, 78, 0.933);
  text-align: center;
  color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;

  p {
    font-weight: 600;
    font-size: 1.3rem;
  }

  h1,
  h2 {
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 426px) {
    height: 100%;
    width: 100%;
  }
`;
