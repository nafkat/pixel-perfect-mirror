import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "el";
type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {} });
const KEY = "bollardpull-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = window.localStorage.getItem(KEY);
    if (saved === "en" || saved === "el") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(KEY, l);
  };
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Pick a localized value: t({ en, el }) */
export function useT() {
  const { lang } = useLang();
  return <T,>(v: { en: T; el: T }) => v[lang];
}
