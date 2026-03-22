import React, { createContext, useState, useEffect } from "react";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { langConfig as importedLangConfig } from "@/lang";

export interface LangContextProps {
  lang: string;
  setLang: (lang: string) => void;
  langConfig: typeof importedLangConfig;
}

export const LangContext = createContext<LangContextProps | undefined>(
  undefined
);

interface LangProviderProps {
  children: React.ReactNode;
  initialLang?: string;
  langConfig?: typeof importedLangConfig;
}

export const LangProvider: React.FC<LangProviderProps> = ({
  children,
  initialLang = "en",
  langConfig,
}) => {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<string>(initialLang);

  useEffect(() => {
    setMounted(true);
    const loadStoredLang = async () => {
      try {
        if (Platform.OS === "web") {
          const storedLang = localStorage.getItem("appLang");
          if (storedLang) {
            setLang(storedLang);
          }
        } else {
          const storedLang = await AsyncStorage.getItem("appLang");
          if (storedLang) {
            setLang(storedLang);
          }
        }
      } catch (error) {
        console.error("Error loading stored language:", error);
      }
    };
    loadStoredLang();
  }, []);

  useEffect(() => {
    if (mounted) {
      const saveLang = async () => {
        try {
          if (Platform.OS === "web") {
            localStorage.setItem("appLang", lang);
            if (typeof document !== "undefined") {
              document.documentElement.lang = lang;
            }
          } else {
            await AsyncStorage.setItem("appLang", lang);
          }
        } catch (error) {
          console.error("Error saving language:", error);
        }
      };
      saveLang();
    }
  }, [lang, mounted]);

  const config = langConfig || importedLangConfig;

  return (
    <LangContext.Provider value={{ lang, setLang, langConfig: config }}>
      {children}
    </LangContext.Provider>
  );
};