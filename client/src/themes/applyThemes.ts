import type { Theme } from "../types/themes"

export function applyTheme(theme: Theme): void {
    const root = document.documentElement
    Object.entries(theme.colors).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value)
    })
}