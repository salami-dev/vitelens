import React from 'react'
import Link from 'next/link'
import {Box, Grid, Typography, Button} from '@mui/material'
 
export default function Page() {
  return (
  <Box>
    <Grid>

      <Typography variant="h1"> This is the About Page</Typography>
      <Link href="/"><Button>Home</Button></Link>
    </Grid>
  </Box>
  );
}