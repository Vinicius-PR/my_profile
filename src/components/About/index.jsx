import React, { useContext } from 'react';
import { Container,Content, About, ImageContainer } from './styles';
import myPhoto from '../../assets/vinicius.jpeg';
import LanguageContext from '../../context/Language';

const text = {
    portuguese: {
        title: 'Oi, Me chamo Vinicius',
        about: 'Sou programador Front End Júnior. Tenho 28 anos e sou formado em técnino em Informática e também em Automação Industrial. Cheguei a começar faculdade de física bacharelado porém não completei. Apesar de gostar de física, percebi que o meu caminho é com a tecnologia. Começei a estudar sozinho, fazendo bootcamps e cursos na udemy. Hoje tenho uma bagagem suficiente para começar nesse mercado da programação web. Meu foco é começar como Júnior, assim como vários começaram. Estou sempre programando e estudando para não ficar para trás. Na minha horas vagas gosto de assistir séries e também de jogar jogos online RPG.'
    },
    english: {
        title: 'Hi, my name is Vinicius',
        about: "I'm a front end junior developer. I'm 28 years old and have a degree in IT and also in Industrial Automation. I started a bachelor degree in physics, but I didn't complete it. Although I like physics, I realized that my path is with technology. I started studying on my own, doing bootcamps and courses on udemy. Today I have enough baggage to get started in this web programming market. My focus is to start as a Junior, as many have started. I'm always programming and studying so I don't get left behind. In my spare time I like to watch series and also play online RPG games."
    }
}

const AboutMe = () => {
    const { language } = useContext(LanguageContext);
    console.log(language)
    return (
        <Container id='about'>
            <h1>Vinicius Paula Resende</h1>
            <Content>
                <ImageContainer>
                    <img src={myPhoto} alt="vinicius" />
                </ImageContainer>
                <About>
                    <h3>{ text[language].title}</h3>
                    <p>
                        {text[language].about}
                    </p>
                </About>
            </Content>
        </Container>
    )
};

export default AboutMe;
