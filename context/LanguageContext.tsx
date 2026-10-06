"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  t: typeof translations.en;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start with 'en' by default to align SSR and initial client hydration
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Check saved preference first
    const saved = localStorage.getItem("andrade_language") as Language | null;
    if (saved === "en" || saved === "es") {
      setLanguageState(saved);
      return;
    }

    // Otherwise detect browser/system language
    const systemLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage;
    if (systemLang && systemLang.toLowerCase().startsWith("es")) {
      setLanguageState("es");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("andrade_language", lang);
    } catch {
      // LocalStorage might be disabled in private mode
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
