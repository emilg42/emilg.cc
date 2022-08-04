import { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark, GlobalStyle } from '../themes';

export const ThemeContext = createContext();

function App({ Component, pageProps }) {

  const [isDarkTheme, setTheme] = useState(true);
  const toggleTheme = () => { setTheme(!isDarkTheme); }

  return (
    <ThemeContext.Provider value = {{ isDarkTheme, toggleTheme }}>
      <ThemeProvider theme={ isDarkTheme ? dark : light }>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
