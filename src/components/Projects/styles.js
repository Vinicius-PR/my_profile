import styled from "styled-components";

export const Container = styled.section`
    max-width: 1440px;
    padding:0 2rem;
    margin: 0 auto;
    margin-top: 2rem;
    position: relative;
    z-index: -1;

    h1 {
        text-align: center;
        margin: 2rem 0;
        color: ${props => props.theme.colors.primary};

    }
    #projects {
        position: absolute;
        @media(max-width: 768px) {
            top: -65px;
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
    
`;