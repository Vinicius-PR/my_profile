import styled from "styled-components";

export const Container = styled.p`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  cursor: pointer;

  font-size: 1.2rem;
  padding: 0.15rem;
  margin: 0 0.25rem;
  border-radius: 0.5rem;

  color: black;
  background-color: ${(props) => props.color};
  border: 1px solid black;
`;
