import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Language } from "./translations";

type LanguageContextValue = {
  lang: Language;
  dir: "ltr" | "rtl";
  toggleLang: () => void;
  t: (typeof translations)["en"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("eventology-lang");
    if (saved === "ar" || saved === "en") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("eventology-lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
