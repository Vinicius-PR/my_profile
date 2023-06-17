import React, { useContext } from "react";
import { Container, Overlay } from "./style";

import LanguageContext from "../../context/Language";

const text = {
  portuguese: {
    title: "Programador Front-End",
    subtitle: "Oi, me chamo Vinícius",
    paragraph:
      "Programador Front-End. HTML | CSS | JavaScript | TypeScript | React | SASS | Styled-Componets.",
  },
  english: {
    title: "Front-End Programmer",
    subtitle: "Hi, my name is Vinícius",
    paragraph:
      "Front-End Programmer. HTML | CSS | JavaScript | TypeScript | React | SASS | Styled-Componets.",
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
