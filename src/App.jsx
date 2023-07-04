import { Link, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './assets/Globals';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/themes/theme';
import { Container } from './assets/styles/Container.styled';

import Home from './Pages/Home';
import About from './Pages/About';
import BookList from './Pages/BookList';
import Mui from './Pages/Mui';

function App() {
  return (
    <ThemeProvider theme={ theme}>
      <GlobalStyles />
      <Container>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/booklist">Book List</Link></li>
            <li><Link to="/mui">MUI</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/mui" element={<Mui />} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}

export default App
