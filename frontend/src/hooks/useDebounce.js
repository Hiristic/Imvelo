import { useState, useEffect } from "react";

const useDebounce = (val, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(val);

  useEffect(
    () => {
      const isSearchingFlag = val.length >= 3;
      const newSearchValue = isSearchingFlag ? val : "";

      const handler = setTimeout(() => {
        setDebouncedValue(newSearchValue);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [val, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
};

export default useDebounce;
