import React, { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/layout/navbar/Navbar';

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Container>
        <GlobalStyles />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  padding: 0 100px;
  position: relative;
`;

const LightTheme = {
  background: 'white',
  fontColor: 'black',
}

const DarkTheme = {
  background: 'black',
  fontColor: 'white',
}