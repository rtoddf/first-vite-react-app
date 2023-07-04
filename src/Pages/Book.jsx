import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';  

function Book(){
  const { id } = useParams();
  return(
    <>
      <h1>Book {id}</h1>
      {/* <Link to="/books/1">book one</Link>
      <Link to="/books/2">book two</Link> */}
    </>
    
  )
}

export default Book;