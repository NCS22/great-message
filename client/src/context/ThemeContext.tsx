import {createContext, useContext, useEffect, useState} from "react"
import  type { ReactNode } from "react"
import lightTheme from "../themes/light.json"
import darkTheme from "../themes/dark.json"
import type { Theme } from "../types/themes"
import { applyTheme } from "../themes/applyThemes"

type ThemeId = 'light' | 'dark'

interface ThemeContextValue {
    themeId: ThemeId
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const themes: Record<ThemeId, Theme> = {
    light: lightTheme as Theme, 
    dark: darkTheme as Theme
}

export function ThemeProvider({children}: {children: ReactNode}) {
    const [themeId, setThemeId] = useState<ThemeId>('light')

    useEffect(() => {
        applyTheme(themes[themeId])
    }, [themeId])

    const toggleTheme = () => {
        setThemeId(prevThemeId => prevThemeId === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ themeId, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider')
  }
  return context
}