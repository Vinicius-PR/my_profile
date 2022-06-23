import styled from "styled-components";

export const ScrollContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    position: fixed;
    bottom: 72rem;
    right: 2rem;
    height: 2.5rem;
    width: 2.5rem;
    background-color: orange;
    border-radius: 50%;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s cubic-bezier(1, 0, 0, 1);
    z-index: 10;

    &.active {
        visibility: visible;
        opacity: 1;
        bottom: 3rem;
    }
`;