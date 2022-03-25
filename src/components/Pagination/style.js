import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
`;

export const Dots = styled.p`
    color: #F7ECDE;
    display: inline-flex;
    justify-content: center;
    align-self: center;
    font-size: 1.2rem;
    width: 2rem;
    height: 2rem;
    padding: 0.15rem;
    margin: 0 0.25rem;

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