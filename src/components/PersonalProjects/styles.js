import styled from "styled-components";

export const PersonalProContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    color: white;
    background-color: gray;
    padding: 1rem;
    border-radius: 16px;
    transition: filter 0.2s;
    width: 10rem;
    margin: 0 auto;
  }

  a:hover {
    filter: brightness(0.8);
  }

  #personal-projects {
    position: absolute;
    @media (max-width: 768px) {
      top: -50px;
    }
  }
`;

export const SwiperContent = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 1rem 1.5rem;
  border: 2px solid black;
  border-radius: 16px;
  height: 33rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 50rem;
  }
`;

export const ImageSwiper = styled.div`
  width: 50%;

  img {
    width: 100%;
    height: 100%;
    padding: 1rem;
    border: 1px solid darkcyan;
    border-radius: 16px;
    object-fit: cover;
    object-position: top;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 40%;
  }
`;

export const TextSwiper = styled.div`
  width: 50%;
  padding: 1.5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
    }
  }
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
