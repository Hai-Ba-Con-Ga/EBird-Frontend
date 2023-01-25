import styled from "styled-components";

export interface ImageWrapperProps {
  height?: string;
  width?: string;
  aspectRatio?: number;
}
export const ImageWrapper = styled.div`
  width: ${(props: ImageWrapperProps) => (props.width ? props.width : "100%")};
  height: ${(props: ImageWrapperProps) =>
    props.height ? props.height : "auto"};
  aspect-ratio: ${(props: ImageWrapperProps) =>
    props.aspectRatio ? props.aspectRatio : "none"};
`;
export const ImageCoverComponent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
type SquareImageWrapperProps = {
  width?: string;
  radius?: "sm" | "md" | "lg" | "full";
};
export const SquareImageWrapper = styled.div`
  width: 5rem;
  aspect-ratio: 1;

  width: ${(props: SquareImageWrapperProps) =>
    props.width ? props.width : "5rem"};
  border-radius: ${(props: SquareImageWrapperProps) => {
    switch (props.radius) {
      case "sm":
        return "var(--roundedSmall)";
      case "md":
        return "var(--roundedMedium)";
      case "lg":
        return "var(--roundedLarge)";
      case "full":
        return "var(--roundedFull)";
      default:
        return "none";
    }
  }};
`;
