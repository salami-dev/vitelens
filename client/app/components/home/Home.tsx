"use client";
import React from "react";
import Link from "next/link";
import { LoadingButton as Button } from "@mui/lab";
import { Grid, Box, Stack } from "@mui/material";
import ImageCard from "@/components/ImageCard";
import { AuthApi } from "@/services/api/auth";
import { useAuth } from "@/hooks/auth";
import { usePhotos } from "@/hooks/photos";

export default function Home() {
  const { data, isLoading, isError, error } = usePhotos();

  console.log("PHOTOS", usePhotos());

  const authClient = useAuth();
  const { mutate, invaidate } = authClient;

  const handleLogout = async () => {
    await AuthApi.logout();
    mutate();
    invaidate();
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

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
        {data?.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ImageCard data={image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
