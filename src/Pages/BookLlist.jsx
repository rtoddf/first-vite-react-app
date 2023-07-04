import { Link } from 'react-router-dom';  

function BookList(){
  return(
    <>
      <h1>Book List</h1>
      <Link to="/books/1">book one</Link>
      <Link to="/books/2">book two</Link>
    </>
    
  )
}

export default BookList;