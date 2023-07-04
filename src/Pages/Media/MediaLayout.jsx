import { Link, Outlet } from 'react-router-dom';

function MediaLayout(){
  return(
    <>
      <Outlet />
      <Link to="/media/video">Video</Link>
      <br />
      <Link to="/media/audio">Audio</Link>
    </>
  )
}

export default MediaLayout;