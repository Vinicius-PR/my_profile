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
    background-color: ${props => props.color};
    border: 1px solid black;

    @media (max-width: 376px) {
        font-size: 1rem;
        width: 1.6rem;
        height: 1.6rem;
    }

    @media (max-width: 300px) {
        font-size: 1rem;
        width: 1.3rem;
        height: 1.3rem;
        padding: 0.10rem;
        margin: 0 0.15rem;
    }
`;