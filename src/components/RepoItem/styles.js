import styled from "styled-components";

export const Container = styled.a`
  background-color: ${(props) => props.theme.colors.bg_color_repo};
  padding: 1rem;
  margin: 0.4rem;
  border-radius: 2rem;
  text-decoration: none;
  color: inherit;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-height: 13rem;
  transition: all 0.2s ease-in;

  .languages {
    display: flex;
    flex-wrap: wrap;
  }

  .languages_item {
    background-color: ${(props) => props.theme.colors.bg_color_lang};
    padding: 0.25rem;
    border-radius: 0.75rem;
    margin-right: 0.25rem;
    margin-top: 0.25rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.bg_color_repo_hover};
    transform: scale(1.02);
  }
`;

export const IconContainer = styled.span`
  margin-right: 0.55rem;
`;
