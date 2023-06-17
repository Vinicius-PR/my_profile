import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.bg_header};
  color: ${(props) => props.theme.colors.text_header};
  height: 90px;
  z-index: 10;
  @media (max-width: 768px) {
    position: fixed;
    display: block;
    width: 100%;
    height: 50px;
  }
`;

export const Content = styled.section`
  margin: 0 auto;
  max-width: 1440px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  display: flex;
  font-family: "Dancing Script", cursive;
  font-weight: 700;
`;

export const Main = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.colors.bg_overlay_main};
    position: absolute;
    flex-direction: column;
    bottom: 0;
    top: 0;
    right: 100%;
    width: 100vw;
    height: 100vh;
    position: fixed;
    transform: translate(${(props) => (props.isMenuOpen ? "100%" : "0")});
    transition: transform 0.3s ease-in;
    font-weight: 800;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin-left: 2rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      flex: 2.5;
      li {
        margin: 1rem 0;
        background-color: ${(props) => props.theme.colors.bg_links};
        padding: 0.5rem;
        border-radius: 0.5rem;

        &:hover,
        &:active {
          filter: brightness(80%);
        }
      }
    }
  }

  .switch_container {
    width: 18%;
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      flex: 1;
      margin-bottom: 8rem;
      margin-left: auto;
      margin-right: auto;
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const IconContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    z-index: 10;
    font-size: 2rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
