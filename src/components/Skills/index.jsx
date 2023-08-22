import React, { useContext } from "react";
import LanguageContext from "../../context/Language";

import { Container, Knowledge, Content } from "./styles";

import jsImg from "../../assets/skills/javascript.png";
import cssImg from "../../assets/skills/css3.png";
import htmlImg from "../../assets/skills/html5.png";
import reactImg from "../../assets/skills/react.png";
import sassImg from "../../assets/skills/sass.png";
import pythonImg from "../../assets/skills/python.png";
import styledComponents from "../../assets/skills/styledComponents.png";

import typeImg from "../../assets/skills/typescript.png";
import nodeImg from "../../assets/skills/node-js.png";
import reduxImg from "../../assets/skills/redux.png";

import graphImg from "../../assets/skills/graphql.png";
import vueImg from "../../assets/skills/vue.png";

const text = {
  portuguese: {
    title: "Minhas habilidades",
    paragraph:
      "Eu estudo programação desde os meus 16 anos, mas foquei mais nessa área depois dos 24 anos. Fiz cursos tecnicos precencial, outros pela internet e também estudo sozinho até hoje. Tenho facilidade com programação e algoritimo. Estou sempre estudando, porque na programação é um aprendizado constante. Sempre tem alguma coisa para aprender. Atualizações das bibliotecas, novas recursos de uma linguagem e por ai vai.",
    subtitle_1: "Tenho Conhecimento",
    subtitle_2: "Estudando",
    subtitle_3: "Tenho interesse",
  },
  english: {
    title: "My Skills",
    paragraph:
      "I've studied programming since I was 16, but I focused more on this area after I was 24. I took technical courses, others on the internet and I also study alone until today. I have ease with programming and algorithm. I'm always studying, because programming is a constant learning process. There's always something to learn. Library updates, new language features and so on.",
    subtitle_1: "Have knowledge",
    subtitle_2: "Studing",
    subtitle_3: "I am Interested",
  },
};

const Skills = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Container>
      <span id="skills"></span>
      <h1>{text[language].title}</h1>

      <p>{text[language].paragraph}</p>

      <Content>
        <Knowledge>
          <h3>{text[language].subtitle_1}</h3>

          <div>
            <img src={jsImg} alt="JavaScript" title="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src={typeImg} alt="TypeScript" title="TypeScript" />{" "}
            <p>TypeScript</p>
          </div>
          <div>
            <img src={cssImg} alt="CSS 3" title="CSS3" /> <p>CSS</p>
          </div>
          <div>
            <img src={htmlImg} alt="HTML 5" title="HTML 5" /> <p>HTML</p>
          </div>
          <div>
            <img src={reactImg} alt="React JS" title="React JS" />{" "}
            <p>React JS</p>
          </div>
          <div>
            <img src={sassImg} alt="Sass" title="Sass" /> <p>SASS</p>
          </div>
          <div>
            <img src={pythonImg} alt="Python" title="Python" /> <p>Python</p>
          </div>
          <div>
            <img
              src={styledComponents}
              alt="Styled Components"
              title="Styled Components"
            />
            <p>Styled Components</p>
          </div>
        </Knowledge>

        <Knowledge>
          <h3>{text[language].subtitle_2}</h3>

          <div>
            <img src={nodeImg} alt="NodeJS" title="NodeJS" />
            <p>NodeJS</p>
          </div>
          <div>
            <img src={reduxImg} alt="Redux" title="Redux" /> <p>Redux</p>
          </div>
        </Knowledge>

        <Knowledge className="lastline">
          <h3>{text[language].subtitle_3}</h3>

          <div>
            <img src={graphImg} alt="GrapfQL" title="GrapfQL" /> <p>Graphql</p>
          </div>
          <div>
            <img src={vueImg} alt="Vue" title="Vue" /> <p>VUE</p>
          </div>
        </Knowledge>
      </Content>
    </Container>
  );
};

export default Skills;
