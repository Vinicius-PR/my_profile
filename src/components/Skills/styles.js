import styled from "styled-components";

export const Container = styled.section`
    max-width: 1440px;
    padding: 1rem 7rem;
    margin-top: 2rem;
    background-color: #ECDFC1;
    position: relative;
    color: black;
    
    @media (max-width: 768px) {
        padding: 1rem 2rem;
    }

    h1 {
        text-align: center;
        margin: 2rem 0;
    }
    
    /* To fix the position of the id span when on mobile */
    #skills {
        position: absolute;
        @media(max-width: 768px) {
            top: -45px;
        }
    }
`;

export const Knowledge = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 30%;
    margin-top: 2rem;
    

    @media (max-width: 768px) {
        width: 40%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }

    h3 {
        margin-bottom: 0.5rem;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease-in;
        cursor: pointer;

        img {
            width: 1.8rem;
        }

        p {
            margin-left: 0.4rem;
        }

        &:hover {
            transform: scale(1.03);
        }
    }

`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-gap: 1rem;
`;