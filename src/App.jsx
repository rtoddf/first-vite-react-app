import { GlobalStyles } from './assets/Globals';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/themes/theme';
import { Container } from './assets/styles/Container.styled';
import GridSimple from './Layouts/GridSimple';
import Card from './Components/Card/default';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

const consoleMessage = (message) => {
  console.log(message)
}

function App() {
  return (
    <ThemeProvider theme={ theme}>
      <GlobalStyles />
      <Container>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          // startIcon={<SendIcon />}
          endIcon={<DeleteIcon />}
          // style={{fontSize: 32}}
          onClick={() => consoleMessage('this is the message')}
        >
          Good Afternoon
        </Button>
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
