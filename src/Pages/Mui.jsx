import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

import GridSimple from '../Layouts/GridSimple';
import Card from '../Components/Card/default';

function Mui(){
  const consoleMessage = (message) => {
    console.log(message)
  }

  return (
    <>
      <h1>MUI</h1>

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
      <GridSimple cols={`4`}>
        <Card image="./images/casey-cott.jpg" name="Casey Cott" show="Riverdale" />
        <Card image="./images/casey-cott.jpg" name="Casey Cott" show="Riverdale" />
        <Card image="./images/casey-cott.jpg" name="Casey Cott" show="Riverdale" />
        <Card image="./images/casey-cott.jpg" name="Casey Cott" show="Riverdale" />
        <Card image="./images/casey-cott.jpg" name="Casey Cott" show="Riverdale" />
        <Card image="./images/casey-cott.jpg" name="Casey Cott" show="Riverdale" />
      </GridSimple>
    </>
  )
}

export default Mui;