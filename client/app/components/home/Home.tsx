"use client";
import React from "react";
import Link from "next/link";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import UploadImage from "@/components/UploadImage";
import BaseFileUpload from "@/components/BasefileUpload";
import { LoadingButton as Button } from "@mui/lab";
import { Grid, Box, Stack } from "@mui/material";
import { UploadApi } from "@/services/api/upload";
import ImageCard from "@/components/ImageCard";
import { AuthApi } from "@/services/api/auth";
import { useAuth } from "@/hooks/auth";
import AuthGuard from "@/utils/AuthGuard";
// import { useRouter, redirect } from 'next/navigation'

export default function Home() {
  const [displayedError, setDisplayedError] = React.useState<string>();
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState<{ url: string; name: string }>();
  const [fileUrl, setFileUrl] = React.useState("");

  const [images, setImages] = React.useState([] as any[]);

  const authClient = useAuth();
  const { isLoading, data, isError, mutate, invaidate } = authClient;

  const handleLoginWithGoogle = async () => {
    try {
      await AuthApi.loginWithGoogle();
      console.log("RESPONSE", "succefull login");
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
      const images = await UploadApi.getAll(); //TODO: haha. you know what to do.
      console.log("IMAGES", images);
      setImages(images);
    };
    fetchImages();
  }, [fileUrl]);

  const handleOnChange = (v: { url: string; name: string }) => {
    setFileUrl(v.url);
    setValue(v);
  };

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
