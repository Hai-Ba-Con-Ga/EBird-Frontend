import styled from "styled-components";
import { TextFieldTheme } from "../theme/TextFieldTheme";
interface TextFieldProps {
  width?: string;
  isValid: boolean;
  theme?: TextFieldTheme | null;
  defaultTheme?: TextFieldTheme | null;
}

export const TextField = styled.div`
  width: ${(props: TextFieldProps) => props.width || "100%"};
  margin: 1rem 0;
  /* overflow: hidden; */
  border: 2px solid
    var(
      ${({
        isValid = true,
        defaultTheme = TextFieldTheme.DEFAULT,
      }: TextFieldProps) => (isValid ? defaultTheme : TextFieldTheme.INVALID)}
    );
  border-radius: var(--roundedSmall) !important;
  position: relative;
  transition: all 0.2s ease-in-out;
  &:focus-within {
    border-color: var(
      ${({ isValid = true, theme = TextFieldTheme.BLACK }: TextFieldProps) =>
        isValid ? theme : TextFieldTheme.INVALID}
    ) !important;
    box-shadow: 1px 2px 10px -5px var(${({ theme = TextFieldTheme.BLACK }: TextFieldProps) => theme}) !important;
  }
  label {
    transition: all 0.2s ease-in-out;
    padding: 0 0.5rem;
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: var(${TextFieldTheme.DEFAULT});
    user-select: none;
    pointer-events: none;
  }
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    color: var(
      ${({
        isValid = true,
        theme = TextFieldTheme.BLACK,
        defaultTheme = TextFieldTheme.DEFAULT,
      }: TextFieldProps) => (isValid ? theme : TextFieldTheme.INVALID)}
    );
    top: 0;
    font-size: 1.5rem;
    transform: translateY(-60%);
    background-color: var(--white);
    padding: 0 0.5rem;
    font-weight: 600;
  }
  input,
  select {
    width: 100%;
    font-size: 2rem;
    padding: 1.25rem 1.25rem;
  }
  &.field_error {
    border-color: var(${TextFieldTheme.INVALID});
    input:focus ~ label,
    input:not(:placeholder-shown) ~ label {
      color: var(${TextFieldTheme.INVALID});
    }
  }
`;
export const FieldError = styled.span`
  opacity: ${({ isShown }: { isShown: boolean }) => {
    return isShown ? "1" : "0";
  }};
  padding: 0.75rem 0.85rem;
  background-color: var(${TextFieldTheme.INVALID});
  color: var(--white);
  font-weight: 500;
  font-size: 1.8rem;
  position: absolute;
  left: 0;
  top: 0;
  /* border-radius: 7px 7px 7px 0px; */
  border-radius: 62% 38% 82% 8% / 51% 56% 46% 50%;
  transform: translateY(calc(-100% - 1rem));
  transition: opacity 0.2s linear;
`;
export const MultipleTextField = styled.div`
  width: ${(props: { width?: string }) => props.width || "100%"};
  display: flex;
  gap: 2rem;
`;
