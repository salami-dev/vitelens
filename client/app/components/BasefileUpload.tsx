"use client";

import React, { useRef } from "react";
import { Box } from "@mui/material";
import { UploadApi } from "../services/api/upload";

interface Props {
  onChange: (v: { url: string; name: string }) => void;
  setError: (error: string | undefined) => void;
  setLoading: (loading: boolean) => void;
  fileType?: "image" | "video" | "file" | "application/pdf";
  children?: React.ReactNode;
  disabled?: boolean;
}

const BaseFileUpload: React.FC<Props> = ({
  fileType = "image",
  setError,
  setLoading,
  onChange,
  children,
  disabled,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = React.useCallback(() => {
    if (disabled) return;
    if (inputRef.current && inputRef.current.files) {
      inputRef.current.value = "";
      inputRef.current?.click();
    }
  }, [disabled]);

  const onFileSelect = React.useCallback(async (file: File) => {
    if (!file) return;
    if (!file.type.includes(fileType)) {
      setError(`Please upload ${fileType} file`);
      return;
    }
    setLoading(true);

    // Replacing all the () in the image because it will break the backgroundImage using
    const updatedName = file?.name.replace(/[- )(]/g, "");

    try {
      const data = await UploadApi.createSignedUrl({ key: updatedName, file });
      console.log(
        "data.presigned in onFileSelect: ",
        data,
        "What do we do with it ?"
      );
      const uploaded = await UploadApi.uploadFile(file, data.preSignedurl);
      const uploadMetadata = await UploadApi.uploadPhotoMetadata({
        name: updatedName,
        description: "",
        isPrivate: false,
        filename: file.name,
        url: data.url,
      });
      // console.log("uploaded in onFileSelect: ", uploaded, "What do we have ?", "uploadMetadata in onFileSelect: ", uploadMetadata, "What do we have ?")
      setError(undefined);
      onChange({
        url: data.url,
        name: updatedName,
      });
    } catch (e) {
      setError(`Failed to upload ${updatedName}. please try again`);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box onClick={handleClick}>
      {children}
      <input
        ref={inputRef}
        type="file"
        accept={
          fileType === "application/pdf" ? "application/pdf" : `${fileType}/*`
        }
        onChange={(event) => {
          event.target.files && onFileSelect(event.target.files[0]);
        }}
        style={{ display: "none", width: 0, height: 0 }}
        multiple={false}
      />
    </Box>
  );
};

export default BaseFileUpload;
