import { GlobalStyles } from './assets/Globals';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/themes/theme';
import { Container } from './assets/styles/Container.styled';
import GridSimple from './Layouts/GridSimple';
import Card from './Components/Card/default';

function App() {
  return (
    <ThemeProvider theme={ theme}>
      <GlobalStyles />
      <Container>
        <GridSimple cols={`6`}>
          <Card image="./images/casey-cott.jpg" name="Casey Cott" show="Riverdale" />
          <Card image="./images/casey-cott.jpg" name="Casey Cott" show="Riverdale" />
          <Card image="./images/casey-cott.jpg" name="Casey Cott" show="Riverdale" />
          <Card image="./images/casey-cott.jpg" name="Casey Cott" show="Riverdale" />
          <Card image="./images/casey-cott.jpg" name="Casey Cott" show="Riverdale" />
          <Card image="./images/casey-cott.jpg" name="Casey Cott" show="Riverdale" />
        </GridSimple>
      </Container>
    </ThemeProvider>
  )
}

export default App
