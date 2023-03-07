import { createContext, useState, useEffect } from "react";

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const storageValue = localStorage.getItem("language");

    if (storageValue) {
      return storageValue;
    } else {
      return "english";
    }
  });

  function hadleLanguageToggle() {
    setLanguage(language === "portuguese" ? "english" : "portuguese");
  }

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        hadleLanguageToggle,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
