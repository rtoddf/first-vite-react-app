import { Link, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './assets/Globals';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/themes/theme';
import { Container } from './assets/styles/Container.styled';

import Home from './Pages/Home';
import About from './Pages/About';
import Media from './Pages/Media/default';
import Video from './Pages/Media/Video';
import Audio from './Pages/Media/Audio';
import MediaLayout from './Pages/Media/MediaLayout';

import Mui from './Pages/Mui';

import NotFound from './Pages/NotFound';
import BookList from './Pages/BookLlist';
import Book from './Pages/Book';

function App() {
  return (
    <ThemeProvider theme={ theme}>
      <GlobalStyles />
      <Container>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/mui">MUI</Link></li>
            <li><Link to="/books">Books</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mui" element={<Mui />} />

          <Route path="/media" element={<MediaLayout />}>
            <Route index element={<Media />} />
            <Route path="video" element={<Video />} />
            <Route path="audio" element={<Audio />} />
          </Route>
          <Route path="*" element={<NotFound />} />

          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<Book />} />

          {/* <Route path="/media" element={<Media />} />
          <Route path="/media/video" element={<Video />} />
          <Route path="/media/audio" element={<Audio />} /> */}
        </Routes>
      </Container>
    </ThemeProvider>
  )
}

export default App
