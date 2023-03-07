import React, { useContext } from "react";
import { Container, Overlay } from "./style";

import LanguageContext from "../../context/Language";

const text = {
  portuguese: {
    title: "Programador Junior",
    subtitle: "Oi, me chamo Vinícius",
    paragraph:
      "Programador junior JavaScript. Tenho conhecimento com HTML, CSS, JavaScript, TypeScript, React, pre processadores CSS e também com algumas bibliotecas mais usadas como react-router, react-hook-form, axios, styled-components e etc. De uma olhada abaixo nos meus projetos pessoais que eu fiz.",
  },
  english: {
    title: "Junior Programmer",
    subtitle: "Hi, my name is Vinícius",
    paragraph:
      "Junior JavaScript programmer. I have knowledge with HTML, CSS, JavaScript, TypeScript, React, CSS preprocessors and also with some most used libraries like react-router, react-hook-form, Axios, styled-components and etc. Take a look at some personal projects below that I did.",
  },
};

const Presentation = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Container>
      <Overlay>
        <h1>{text[language].title}</h1>
        <h2>{text[language].subtitle}</h2>
        <p>{text[language].paragraph}</p>
      </Overlay>
    </Container>
  );
};

export default Presentation;
