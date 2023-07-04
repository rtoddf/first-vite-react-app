import {Container} from './assets/styles/Container.styled';
import Card from './components/Card/default';

function App() {
  // const social = [
  //   {
  //       "icon": "fab fa-facebook-f",
  //       "link": "https://www.facebook.com/"
  //   },
  //   {
  //       "icon": "fab fa-twitter",
  //       "link": "https://www.twitter.com/"
  //   },
  //   {
  //       "icon": "fas fa-share",
  //       "link": ""
  //   },
  //   {
  //       "icon": "fas fa-thumbs-up",
  //       "link": ""
  //   }
  // ];

  return (
    <Container>
      <h1>Hello World</h1>
      <Card image="./images/casey-cott.jpg" name="Casey Cott" show="Riverdale" />
    </Container>
  )
}

export default App
