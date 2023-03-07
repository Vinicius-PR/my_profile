import styled from "styled-components";

export const Container = styled.section`
  max-width: 1440px;
  text-align: center;
  position: relative;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }

  /* To fix the position of the id span when on mobile */
  #contacts {
    position: absolute;
    @media (max-width: 768px) {
      top: -45px;
    }
  }

  h3 {
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 500px;
  margin: 1rem auto;

  div {
    padding: 0 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    textarea {
      width: 300px;
      height: 150px;
      padding: 0.4rem;
    }
  }

  input {
    margin-top: 0.3rem;
    margin-bottom: 0.5rem;
    padding: 0.4rem;
  }

  input[type="submit"] {
    margin-top: 0.5rem;
    width: 6rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    transition: all 0.2s;
    background-color: ${(props) => props.theme.colors.bg_send_btn};
    color: ${(props) => props.theme.colors.btn_color};
    &:hover {
      filter: brightness(70%);
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Spinner = styled.span`
  display: inline-block;
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22a6b3;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  animation: spin 1s linear infinite;
  margin-left: 1rem;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
