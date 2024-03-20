"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useGetPhoto } from "@/hooks/photos";
import BasePageLoader from "@/components/BasePageLoader";
import ImageCard from "./components/ImageCard";

const Page = ({ params }: { params: { slug: string } }) => {
  const photoId = params.slug;
  console.log(params, "PhotoID here");
  console.log("HPINNESS");
  if (!photoId) alert("No such photo exists");
  const { data, isError, isLoading } = useGetPhoto(photoId);
  if (isLoading) return <BasePageLoader />;
  if (isError) return <div>Error</div>;
  if (!data) return <div>No such photo exists data</div>;

  console.log(data.tags);

  return (
    <Box pt={4}>
      <Container>
        {/* <Typography variant="h5"> See Photo here </Typography>
        <Typography variant="h4"> Page ID is.....: {params.slug}</Typography> */}
        <ImageCard src={data.uri} alt={data.filename} />
      </Container>
    </Box>
  );
};

export default Page;
