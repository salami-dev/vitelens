import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import UploadImage from './components/UploadImage';

export default function BasicButtons() {
  return (
    <Stack useFlexGap spacing={2} direction="column"  sx={{
      width: '200px',
      margin: '0 auto',
    }} >
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <UploadImage /> 
    </Stack>
  );
}