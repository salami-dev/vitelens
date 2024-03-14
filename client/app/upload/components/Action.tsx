"use client";
import { useState } from "react";
import { LoadingButton as Button } from "@mui/lab";
import BaseFileUpload from "@/components/BasefileUpload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BaseFileSelect from "@/components/BaseFileSelect";
import { Typography, Box, IconButton, Grid, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImagePreview from "./ImagePreview";
import { usePhotos } from "@/hooks/photos";
import { PhotoUploadForm } from "@/bl/photos";

const Action = () => {
  const [displayedError, setDisplayedError] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<{ url: string; name: string }>();
  const [fileUrl, setFileUrl] = useState("");
  const [file, setFile] = useState<File>();
  const [fileName, setFileName] = useState("");
  const { uploader, data } = usePhotos();

  const handleOnChange = (v: { url: string; name: string }) => {
    setFileUrl(v.url);
    setValue(v);
  };

  const handleOnClick = async () => {
    const photoData: PhotoUploadForm = {
      name: "alaska",
      description: "describing Alaska",
      filename: fileName,
      isPrivate: false,
      uri: fileUrl,
    };
    console.log(file);
    console.log(uploader, data);
    await uploader(photoData);
  };

  const ImageUpload = () => (
    <BaseFileSelect
      onChange={handleOnChange}
      setError={setDisplayedError}
      setLoading={setLoading}
      setFileName={setFileName}
      setFile={setFile}
    >
      <Stack useFlexGap>
        <FileUploadIcon
          color="primary"
          fontSize="large"
          sx={{
            fontSize: "75px",
          }}
          titleAccess="upload image"
        />
        <Typography color="primary" variant="subtitle2" align="center">
          {" "}
          Select Image to upload
        </Typography>
      </Stack>
    </BaseFileSelect>
  );

  return (
    <>
      <Box
        sx={{
          height: 300,
          my: 4,
          px: 2,
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              border: "1px solid #ccc",
              borderRadius: 4,
              position: "relative",
              height: "100%",
            }}
            container
            justifyContent="center"
          >
            {file && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bgcolor: "#ccc",
                  borderTopRightRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
                component="div"
              >
                <IconButton
                  onClick={() => {
                    setFile(undefined);
                    setFileName("");
                    setDisplayedError("");
                  }}
                >
                  <CloseIcon />
                </IconButton>{" "}
              </Box>
            )}
            {file ? <ImagePreview src={file} /> : <ImageUpload />}
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography variant="subtitle2">
          File name : {fileName ? fileName : "Please select an Image to upload"}
        </Typography>

        <Box pt={2}>
          <Button
            onClick={handleOnClick}
            variant="contained"
            fullWidth
            disabled={!file}
          >
            {" "}
            Upload
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Action;
