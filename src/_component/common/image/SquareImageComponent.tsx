import React from "react";
import { SquareImageWrapper } from "./Image.style";
import ImageComponent from "./ImageComponent";

type Props = {
  src: string;
  alt?: string;
  width?: string;
  radius?: "sm" | "md" | "lg" | "full";
};

function SquareImageComponent({ src, alt, radius, width }: Props) {
  return (
    <SquareImageWrapper width={width} radius={radius}>
      <ImageComponent src={src} alter={alt} />
    </SquareImageWrapper>
  );
}

export default SquareImageComponent;
