"use client";
import React from 'react';
import Link from 'next/link'
import UploadImage from './components/UploadImage';
import BaseFileUpload from './components/BasefileUpload';
import { LoadingButton as Button } from '@mui/lab';
import { Grid, Box, Stack } from '@mui/material';
import { UploadApi } from './services/api/upload';
import ImageCard from './components/ImageCard';
import { AuthApi } from './services/api/auth';
import { useAuth } from './hooks/useAuth';
import AuthGuard from './utils/AuthGuard';

export default function BasicButtons() {

  const [displayedError, setDisplayedError] = React.useState<string>();
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState<{ url: string; name: string }>();
  const [fileUrl, setFileUrl] = React.useState('');
  const { data, isLoading } = useAuth();

  console.log("DATA login status", data)
  console.log("Broohahahahahaha")

  const [images, setImages] = React.useState([] as any[]); 
  
  const handleLoginWithGoogle = async () => {
    try {
      
      await AuthApi.loginWithGoogle();
      console.log("RESPONSE","succefull login")
    } catch (error) {
      console.log("ERROR", error)
      
    }

  }

  React.useEffect(() => {
    const fetchImages = async () => {
      const images = await UploadApi.getAll(); //TODO: haha. you know what to do.
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
 <AuthGuard>
    <Box>
     <Stack useFlexGap spacing={2} direction="column"  sx={{
      width: '200px',
      margin: '0 auto',
    }} >
      <Link href="/about"><Button variant='outlined'>Home</Button></Link>

      <Link href="http://localhost:8000/auth/google"> <Button onClick={handleLoginWithGoogle} fullWidth variant='outlined'> LoginWith Google</Button></Link>

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
 </AuthGuard>
  );
}