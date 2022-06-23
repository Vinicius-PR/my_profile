import React, {useContext} from 'react';
import { Container, Overlay } from './style';

import LanguageContext from '../../context/Language';

const text = {
  portuguese: {
    title: 'Programador Junior',
    subtitle: 'Oi, me chamo Vinícius',
    paragraph: 'Programador junior JavaScript, php, html e CSS. Eu escrevo codigo limpo e organizado. Além disso gosto muito de programar. Bora codar !'
  },
  english: {
    title: 'Junior Programmer',
    subtitle: 'Hi, my name is Vinícius',
    paragraph: 'Junior Programmer JavaScript, php, html and CSS. I like to write clean come and organized. Also I enjoy programming. Lets go and code !'
  }
}

const Presentation = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Container>
      
      <Overlay>

        
          <h1>{text[language].title}</h1>
          <h2>{text[language].subtitle}</h2>
          <p>
            {text[language].paragraph}
          </p>
        
      </Overlay>

    </Container>
  )
}

export default Presentation;
