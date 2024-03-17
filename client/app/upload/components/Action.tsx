"use client";
import { useState } from "react";
import { LoadingButton as Button } from "@mui/lab";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BaseFileSelect from "@/components/BaseFileSelect";
import { Typography, Box, IconButton, Grid, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImagePreview from "./ImagePreview";
import { usePhotos, useCreatePhoto } from "@/hooks/photos";
import { PhotoUploadForm } from "@/bl/photos";
import { UploadApi, UploadApiTypes } from "@/services/api/upload";
import { useRouter } from "next/navigation";

const Action = () => {
  const [displayedError, setDisplayedError] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [s3Uploaded, setS3Uploaded] = useState(false);
  const [signedData, setSignedData] =
    useState<UploadApiTypes.SignedUrlResponse>();
  const [fileUrl, setFileUrl] = useState("");
  const [file, setFile] = useState<File>();
  const [fileName, setFileName] = useState("");
  const { data } = usePhotos();
  const { mutate } = useCreatePhoto();
  const router = useRouter();

  console.log("HERE IS MUTATE", mutate);

  const handleOnChange = async (
    signedData: UploadApiTypes.SignedUrlResponse,
    name: string,
    imageFile: File
  ) => {
    setFileName(name);
    setSignedData(signedData);
    setFileUrl(signedData.url);

    if (!imageFile) {
      alert("NO Image PRESENT!!!!. Please refresh page or reupload");
    }

    try {
      await UploadApi.uploadFile(imageFile, signedData.preSignedurl);
      setS3Uploaded(true);
    } catch (error) {
      setS3Uploaded(false);
      setFile(undefined);
    }
  };

  const handleOnClick = async () => {
    const photoData: PhotoUploadForm = {
      name: fileName,
      description: "describing  " + fileName,
      filename: fileName,
      isPrivate: false,
      uri: fileUrl,
      tags: ["tag1", "tag2", "tag9"],
    };

    try {
      mutate(photoData);
      // setS3Uploaded(false);
      // setFile(undefined);
      // setFileName("");
    } catch (error) {
      console.log(error, " : : : error while uploading to DB");
    } finally {
      setS3Uploaded(false);
      setFile(undefined);
      setFileName("");
      // router.push("/", { scroll: true });
    }
  };

  const ImageUpload = () => (
    <BaseFileSelect
      onChange={handleOnChange}
      setError={setDisplayedError}
      setLoading={setLoading}
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
            disabled={!s3Uploaded}
          >
            {file ? (s3Uploaded ? "finish upload" : "loading...") : "Upload"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Action;
