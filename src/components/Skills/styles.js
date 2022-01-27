import styled from "styled-components";

export const Container = styled.section`
    max-width: 1440px;
    padding: 1rem 7rem;
    margin: 0 auto;
    margin-top: 2rem;
    background-color: #ECDFC1;
    text-align: center;
    position: relative;
    z-index: -1;
    
    @media (max-width: 768px) {
        padding: 1rem 2rem;
    }

    h1 {
        margin: 2rem 0;
        color: ${props => props.theme.colors.primary};
    }

    #skills {
        position: absolute;
        @media(max-width: 768px) {
            top: -65px;
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    div {
        h3 {
            padding-bottom: 1rem;
            color: ${props => props.theme.colors.subtitle};
        }
    }
    img {
        width: 35px;
        margin: 0 0.20rem;
        transition: transform 0.2s;
        &:hover {
            transform: translateY(-10px);
            box-shadow: #e65c00;
        }
    }
`;