import React, {useState, useEffect} from 'react';

import Header from './components/Header';
import AboutMe from './components/About';
import Projects from './components/Projects';

import light from './styles/theme/light';
import dark from './styles/theme/dark';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { LanguageProvider } from './context/Language';
import Skills from './components/Skills';
import Contacts from './components/Contacts/Index';
import Scroll from './components/Scroll/Index';

function App() {
  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem("theme");

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return light;
    }
  });

  function handleThemeToggle() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <Scroll/>
        <GlobalStyle/>
        <Header handleThemeToggle={handleThemeToggle} />
        <AboutMe />
        <Projects/>
        <Skills />
        <Contacts/>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
