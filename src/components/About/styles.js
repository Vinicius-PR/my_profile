import styled from "styled-components";

export const Container = styled.section`
    padding: 0 2rem;
    padding-top: 2rem;
    max-width: 1440px;
    margin: 0 auto;
    h1 {
        text-align: center;
        margin-bottom: 2rem;
        @media (max-width: 768px) {
            margin-top: 60px;
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
export const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
        padding-bottom: 1rem;
        color: ${props => props.theme.colors.primary};

    }
    p{
        text-align: justify;
        line-height: 25px;
        width: 80%;
    }
`;


export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 350px;
        height: 350px;
        object-fit: cover;
        object-position: top;
        /* transform: translateX(10px); */
        border-radius: 50%;
        margin: 0 auto;
        @media (max-width: 768px) {
            width: 300px;
            height: 300px;
            padding-bottom: 1rem;
        }
        @media (max-width: 425px) {
            width: 250px;
            height: 250px;
        }
    }
`;