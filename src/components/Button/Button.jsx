import { Button } from '@mui/material'
import React from 'react'
import { stylesnew } from '../../Pages/Style'

function Buttonsty({reminder}) {
  return (
    <Button sx={stylesnew.button(reminder)}>
     {reminder}
    </Button>

  )
}

export default Buttonsty