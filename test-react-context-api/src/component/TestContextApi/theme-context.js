import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#ff0000',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});