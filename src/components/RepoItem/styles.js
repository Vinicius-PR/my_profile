import styled from "styled-components";

export const Container = styled.a`
    background-color: ${props => props.theme.colors.bg_color_repo};
    padding: 1rem;
    margin: 0.40rem;
    border-radius: 2rem;
    text-decoration: none;
    color: inherit;

    p{
        margin: 0.35rem 0;
    }

    .languages {
        display: flex;
        flex-wrap: wrap;
    }

    .languages_item {
        background-color: ${props => props.theme.colors.primary_modified};
        padding: 0.25rem;
        border-radius: 0.75rem;
        margin-right: 0.25rem;
        margin-top: 0.25rem;
    }
`;

export const IconContainer = styled.span`
    margin-right: 0.55rem;
`;