import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { themeId, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      {themeId === 'light' ? 'Modo oscuro' : 'Modo claro'}
    </button>
  )
}

export default ThemeToggle