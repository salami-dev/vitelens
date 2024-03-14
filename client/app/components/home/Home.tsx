"use client";
import React from "react";
import Link from "next/link";
import { LoadingButton as Button } from "@mui/lab";
import { Grid, Box, Stack } from "@mui/material";
import ImageCard from "@/components/ImageCard";
import { AuthApi } from "@/services/api/auth";
import { useAuth } from "@/hooks/auth";
import { PhotoApi } from "@/services/api/photos";

export default function Home() {
  const [images, setImages] = React.useState([] as any[]);

  const authClient = useAuth();
  const { mutate, invaidate } = authClient;

  const handleLoginWithGoogle = async () => {
    try {
      await AuthApi.loginWithGoogle();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const handleLogout = async () => {
    await AuthApi.logout();
    mutate();
    invaidate();
  };

  React.useEffect(() => {
    const fetchImages = async () => {
      const images = await PhotoApi.getPhotos(); //TODO: haha. you know what to do.
      setImages(images);
    };
    fetchImages();
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        useFlexGap
        spacing={2}
        sx={{
          width: "200px",
          margin: "20px auto",
        }}
      >
        <Button onClick={handleLogout}> Logout </Button>

        <Link href="/upload">
          <Button> Upload Photo</Button>{" "}
        </Link>
      </Stack>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ImageCard imgUrl={image.uri ?? image.url} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
