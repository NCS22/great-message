export interface ThemeColors {
  'background-primary': string
  'background-secondary': string
  'background-complementary': string
  'text-primary': string
  'text-secondary': string
  'text-complementary': string
  'button-primary': string
  'button-secondary': string
  'button-primary-hover': string
  'button-secondary-hover': string
  'button-primary-focus': string
  'button-secondary-focus': string
}

export interface Theme {
  id: 'light' | 'dark'
  name: string
  colors: ThemeColors
}