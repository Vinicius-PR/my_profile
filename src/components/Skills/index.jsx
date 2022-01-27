import React, {useContext} from 'react';
import LanguageContext from '../../context/Language';

import { Container, Content } from './styles';

import jsImg from '../../assets/javascript.png';
import cssImg from '../../assets/css3.png';
import htmlImg from '../../assets/html5.png';
import reactImg from '../../assets/react.png';
import typeImg from '../../assets/typescript.png';
import sassImg from '../../assets/sass.png';
import graphImg from '../../assets/graphql.png';
import vueImg from '../../assets/vue.png';
import pythonImg from '../../assets/python.png';

const Skills = () => {
    const { language } = useContext(LanguageContext);
    return (
        <Container>
            <span id='skills'></span>
            <h1>{language === 'portuguese' ?  'Minhas Skills' : 'My Skills'}</h1>
            <Content>
                <div>
                    <h3>{language === 'portuguese' ? 'Tenho conhecimento' : 'Have knowledge'}</h3>
                    <img src={jsImg} alt="JavaScript" title='JavaScript'/>
                    <img src={cssImg} alt="CSS 3" title='CSS3'/>
                    <img src={htmlImg} alt="HTML 5" title='HTML 5'/>
                    <img src={reactImg} alt="React JS" title='React JS'/>
                    <img src={sassImg} alt="Sass" title='Sass'/>
                </div>

                <div>
                    <h3>{language === 'portuguese' ?  'Estudando' : 'Studying'}</h3>
                    <img src={typeImg} alt="TypeScript" title='TypeScript'/>
                    <img src={graphImg} alt="Graphql" title='Graphql'/>
                </div>
                <div>
                    <h3>{language === 'portuguese' ? 'Tenho Interesse' : "I'm interested"}</h3>
                    <img src={vueImg} alt="Vue JS" title='Vue JS'/>
                    <img src={pythonImg} alt="Phyton" title='Phyton'/>
                </div>
            </Content>
        </Container>
    );
};

export default Skills;
