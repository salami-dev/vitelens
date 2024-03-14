import React from "react";
import { Box } from "@mui/material";

interface Props {
  src: File;
}

const ImagePreview: React.FC<Props> = ({ src }) => {
  return (
    <Box
      component="img"
      src={URL.createObjectURL(src)}
      alt="Selected"
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
    />
  );
};

export default ImagePreview;
