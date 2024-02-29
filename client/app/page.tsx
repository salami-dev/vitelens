"use client";
import React from 'react';
import UploadImage from './components/UploadImage';
import BaseFileUpload from './components/BasefileUpload';
import { LoadingButton as Button } from '@mui/lab';
import { Grid, Box, Stack } from '@mui/material';
import { UploadApi } from './services/api/upload';
import ImageCard from './components/ImageCard';

export default function BasicButtons() {

  const [displayedError, setDisplayedError] = React.useState<string>();
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState<{ url: string; name: string }>();
  const [fileUrl, setFileUrl] = React.useState('');

  const [images, setImages] = React.useState([] as any[]);  

  React.useEffect(() => {

    const fetchImages = async () => {
      const images = await UploadApi.getAll();
      console.log("IMAGES", images)
      setImages(images);
    }

    fetchImages();
  }, [fileUrl])


  const handleOnChange = (v: { url: string; name: string }) => {
    setFileUrl(v.url);
    setValue(v);
  };

  console.log("PROCESS env", process.env.ENV)
  console.log(images, "IMAGES")
  return (
   <Box>
     <Stack useFlexGap spacing={2} direction="column"  sx={{
      width: '200px',
      margin: '0 auto',
    }} >
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
      {/* <UploadImage />  */}
      {/* <BaseFileUpload fileType="image" onChange={(file) => console.log(file)} /> */}

      <BaseFileUpload
          onChange={handleOnChange}
          setError={(e) => setDisplayedError(e)}
          setLoading={(v) => setLoading(v)}
        >
          
            
          {/* {value?.name ? value?.name :'No file selected'} */}
          <Button variant="outlined" loading={loading} color="inherit" sx={{ height: '100%', width: '7.6rem' }}>

            
            {value?.name ? value?.name :'No file selected'}
            {value?.name ? 'Change' : 'Upload'}
          </Button>
        </BaseFileUpload>

       

        
    </Stack>
     <Grid container spacing={2}>
     {images.map((image, index) =>
     
       <Grid item key={index} xs={12} sm={6} md={4}>
         <ImageCard imgUrl={image.url} />
       </Grid>
     
     )}
   </Grid> 
   </Box>
  );
}