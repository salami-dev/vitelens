// create an image card component using material UI 5.

import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { PhotoType } from "@/bl/photos";
import Link from "next/link";

interface Props {
  data: PhotoType;
}

const ImageCard: React.FC<Props> = ({ data }) => {
  const { uri, description, name, filename, id } = data;
  return (
    <Link href={`/photo/${id}`}>
      <Card>
        <CardMedia component="img" height="240" image={uri} alt={name} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            this image is called: {name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ImageCard;
