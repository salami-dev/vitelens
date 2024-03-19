import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <Box pt={4}>
      <Container>
        <Typography variant="h5"> See Photo here </Typography>
        <Typography variant="h4"> Page ID is.....: {params.slug}</Typography>
      </Container>
    </Box>
  );
};

export default Page;
