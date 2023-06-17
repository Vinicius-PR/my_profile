import React, { useContext } from "react";
import { Container, Content, About, ImageContainer } from "./styles";
import myPhoto from "../../assets/vinicius.jpeg";
import LanguageContext from "../../context/Language";

const text = {
  portuguese: {
    title: "Oi, tudo bem?",
    about:
      "Sou programador Front End. Tenho 29 anos, sou formado em técnico de Informática e também em Automação Industrial. Comecei a estudar sozinho, fazendo bootcamps e cursos na udemy. Hoje tenho uma bagagem suficiente para começar nesse mercado da programação web. Meu foco é trabalhar como programador Front-End, contribuindo com uma equipe de engenheiros e programadores. Estou sempre programando e estudando para não ficar para trás. Nas minhas horas vagas, gosto de assistir séries e também de jogar jogos online RPG.",
  },
  english: {
    title: "Hi, how are you doing?",
    about:
      "I'm a Front End programmer. I'm 29 years old, graduated in IT technician and also in Industrial Automation. I started studying on my own, doing bootcamps and courses on udemy. Today I have enough luggage to start in this web programming market. My focus is to work as a Front-End programmer, contributing to a team of engineers and programmers. I'm always programming and studying so I don't fall behind. In my spare time, I like to watch series and also play online RPG games.",
  },
};

const AboutMe = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Container id="about">
      <h1>Vinicius Paula Resende</h1>
      <Content>
        <ImageContainer>
          <img src={myPhoto} alt="vinicius" />
        </ImageContainer>
        <About>
          <h3>{text[language].title}</h3>
          <p>{text[language].about}</p>
        </About>
      </Content>
    </Container>
  );
};

export default AboutMe;
