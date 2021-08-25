import React from "react";
import Spinner from "../common/Spinner/Spinner";
import { theme } from "../../theme";

const StatusCell = ({ value }) => {
  return value === "Pending" ? (
    <Spinner color={theme.colors.primary} margin={"0"} />
  ) : (
    value
  );
};

export default StatusCell;
