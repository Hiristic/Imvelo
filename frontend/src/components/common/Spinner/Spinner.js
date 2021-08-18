import { StyledSpinner } from "./spinner.styled";

const Spinner = ({ color, size, margin }) => (
  <StyledSpinner margin={margin} size={size} color={color} viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="3"
    />
  </StyledSpinner>
);

export default Spinner;
