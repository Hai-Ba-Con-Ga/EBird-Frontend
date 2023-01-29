import React from "react";
import {
  ImageCoverComponent,
  ImageWrapper,
  ImageWrapperProps,
} from "./Image.style";

interface Props extends ImageWrapperProps {
  src: string;
  alter?: string;
}

const ImageComponent = ({ src, alter, aspectRatio, height, width }: Props) => {
  return (
    <ImageWrapper height={height} width={width} aspectRatio={aspectRatio}>
      <ImageCoverComponent src={src} alt={alter} />
    </ImageWrapper>
  );
};

export default ImageComponent;
