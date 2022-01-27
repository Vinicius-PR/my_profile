import styled from "styled-components";

export const Container = styled.section`
    max-width: 1440px;
    padding: 1rem 8rem;
    margin: 0 auto;
    margin-top: 2rem;
    text-align: center;
    position: relative;
    
    @media (max-width: 768px) {
        padding: 1rem 2rem;
    }

    h1 {
        margin: 2rem 0;
        color: ${props => props.theme.colors.primary};  
    }

    #contacts {
        position: absolute;
        @media(max-width: 768px) {
            top: -65px;
        }
    }
`;

export const Link = styled.a`
    text-decoration: none;
    &:not(:last-child) {
        margin-right: 2rem;
    }
    svg{
        
    }
`;