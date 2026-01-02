import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationKey, Tone, toneVariants, getTranslation } from '../lib/translations';

type Language = keyof typeof translations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  tone: Tone;
  setTone: (tone: Tone) => void;
  t: (key: TranslationKey | string) => string;
  isRTL: boolean;
  fontFamily: string;
}

// Provide a robust default value so useContext never returns undefined
const defaultContext: LanguageContextType = {
  language: 'EN',
  setLanguage: () => {},
  tone: 'corporate',
  setTone: () => {},
  t: (key: string) => key,
  isRTL: false,
  fontFamily: "'Poppins', sans-serif"
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');
  const [tone, setTone] = useState<Tone>('corporate');
  const [isRTL, setIsRTL] = useState(false);

  // Memoize the translation function to prevent unnecessary re-renders
  const t = React.useCallback((key: TranslationKey | string): string => {
    return getTranslation(key, language, tone);
  }, [language, tone]);

  const [fontFamily, setFontFamily] = useState("'Poppins', sans-serif");

  // Auto-detection logic
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('paperware-lang') as Language;
      const savedTone = localStorage.getItem('paperware-tone') as Tone;
      
      if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
      } else {
        const browserLang = navigator.language.split('-')[0].toUpperCase();
        if (translations[browserLang]) {
          setLanguage(browserLang as Language);
        }
      }

      if (savedTone) setTone(savedTone);
    } catch (e) {
      console.warn("LocalStorage not accessible", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('paperware-lang', language);
      localStorage.setItem('paperware-tone', tone);
    } catch (e) {
      // Ignore
    }
    
    const rtlLanguages = ['AR', 'FA', 'UR'];
    const currentIsRTL = rtlLanguages.includes(language);
    setIsRTL(currentIsRTL);
    
    document.documentElement.dir = currentIsRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language.toLowerCase();

    const fontMap: Record<string, string> = {
      BN: "'Noto Serif Bengali', serif",
      AR: "'Cairo', sans-serif",
      FA: "'Cairo', sans-serif",
      UR: "'Noto Nastaliq Urdu', serif",
      HI: "'Noto Sans Devanagari', sans-serif",
      ZH: "'Noto Sans SC', sans-serif",
      JA: "'Noto Sans JP', sans-serif",
      KO: "'Noto Sans KR', sans-serif",
      TH: "'Noto Sans Thai', sans-serif",
      RU: "'Noto Sans', sans-serif",
      DEFAULT: "'Poppins', sans-serif"
    };

    const selectedFont = fontMap[language] || fontMap.DEFAULT;
    setFontFamily(selectedFont);
    document.body.style.fontFamily = selectedFont;
  }, [language]);

  const contextValue = React.useMemo(() => ({
    language,
    setLanguage,
    tone,
    setTone,
    t,
    isRTL,
    fontFamily
  }), [language, tone, t, isRTL, fontFamily]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}