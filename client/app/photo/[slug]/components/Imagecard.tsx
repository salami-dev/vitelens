import React from "react";
import { Box, Card } from "@mui/material";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};
const Imagecard: React.FC<Props> = ({ src, alt }) => {
  return (
    <Box>
      <Card
        sx={{
          position: "relative",
        }}
      >
        {/* <Container> */}
        <Image
          src={src}
          alt={alt}
          fill
          blurDataURL="data:image/jpeg..."
          placeholder="blur"
          priority
        />
        {/* </Container> */}
      </Card>
    </Box>
  );
};

export default Imagecard;
