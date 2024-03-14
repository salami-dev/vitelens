import React from "react";
import Link from "next/link";
import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BaseFileUpload from "@/components/BasefileUpload";
import Action from "./components/Action";

const Upload = () => {
  return (
    <Box pt={4}>
      <Container>
        <Box>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h5"> Upload Image</Typography>
            </Grid>
            <Grid item xs={1}>
              <Link href="/">
                <IconButton
                  sx={{
                    bgcolor: "Background.default",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Box>

        <Box component="section">
          <Action />
        </Box>
      </Container>
    </Box>
  );
};

export default Upload;
