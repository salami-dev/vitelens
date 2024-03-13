import React from 'react'
import GoHome from '@/app/components/GoHome'
import { Box, Container, Typography, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const Upload = () => {
  return (
    <Box pt={4} >
      <Container>
<Box>
  <Grid container justifyContent="space-between"   >
    <Grid item><Typography variant="h5"> Upload Image</Typography></Grid>
    <Grid item xs={1} >
      <CloseIcon/>
    </Grid>
  </Grid>
</Box>
      </Container>
    </Box>
  )
}

export default Upload