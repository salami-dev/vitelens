"use client";
import React, { useState } from "react";
import { LoadingButton as Button } from "@mui/lab";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BaseFileSelect from "@/components/BaseFileSelect";
import { Typography, Box, IconButton, Grid, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImagePreview from "./ImagePreview";
import { usePhotos, useCreatePhoto } from "@/hooks/photos";
import { PhotoUploadForm, PhotoUploadFormKeys } from "@/bl/photos";
import { UploadApi, UploadApiTypes } from "@/services/api/upload";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { BaseInput } from "@/components/BaseInput";
import Chip from "@mui/material/Chip";

// TODO: clear react hook form and dependemcies

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
  const [photoTags, setPhotoTags] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string>("");
  const [name, setName] = useState<string>(fileName);

  // TODO: maybe put this in a function or hook. and expecially a useeffect
  const tagsArray = photoTags
    ?.trim()
    .split(",")
    .filter((tag) => tag !== "");
  const tagsSet = new Set(tagsArray);
  const retroTags = Array.from(tagsSet);

  const onSubmit: SubmitHandler<PhotoUploadForm> = (data) => console.log(data);

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

  React.useEffect(() => console.log("namein ....", name), [name]);

  // TODO: hand;e better and add type of event to e

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const photoData: PhotoUploadForm = {
      name: name,
      description: description,
      filename: fileName,
      isPrivate: false,
      uri: fileUrl,
      tags: tagsSet ? Array.from(tagsSet) : [],
    };

    console.log(photoData, "PHOTO DATA here");

    try {
      mutate(photoData);

      // setS3Uploaded(false);
      // setFile(undefined);
      // setFileName("");
    } catch (error) {
      console.log(error, " : : : error while uploading to DB");
      return;
    } finally {
      console.log("thIS STILL RUNS!!!!!!!!!!!1  ");
      setS3Uploaded(false);
      setFile(undefined);
      setFileName("");
      setName("");
      setDescription("");
      setPhotoTags(undefined);
      setDisplayedError("");
      router.push("/");
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
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <BaseInput
                name={PhotoUploadFormKeys.name}
                value={name}
                id={PhotoUploadFormKeys.name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BaseInput
                value={description}
                name={PhotoUploadFormKeys.description}
                id={PhotoUploadFormKeys.description}
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
          </Grid>

          <Stack direction="row" spacing={1} my={2}>
            {retroTags?.map((tag) => (
              <Chip
                label={tag}
                key={tag}
                variant="outlined"
                color="info"
                sx={{ minWidth: 40, fontSize: 16 }}
                size="medium"
              />
            ))}
          </Stack>
          <Grid container>
            <BaseInput
              value={photoTags ?? ""}
              name={PhotoUploadFormKeys.tags}
              id={PhotoUploadFormKeys.tags}
              disabled={(retroTags?.length ?? 0) > 10}
              required
              onChange={(e) => {
                setPhotoTags(e.target.value);
              }}
            />
          </Grid>
          <Box pt={2}>
            <Button
              // onClick={handleOnClick}
              type="submit"
              variant="contained"
              fullWidth
              disabled={!s3Uploaded}
            >
              {file ? (s3Uploaded ? "finish upload" : "loading...") : "Upload"}
            </Button>
          </Box>
        </Box>
      </Box>
      <Typography variant="subtitle2" color="error">
        Error Here : {displayedError}
      </Typography>

      <Box>
        <Typography variant="subtitle2">
          File name : {fileName ? fileName : "Please select an Image to upload"}
        </Typography>
      </Box>
    </>
  );
};

export default Action;
