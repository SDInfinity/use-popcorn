import { useState, useEffect } from "react";

export const useLocaleStorage = (key) => {
  const [value, setValue] = useState(() => {
    const storeValue = localStorage.getItem(key);
    return storeValue ? JSON.parse(storeValue) : [];
  });

  // to retrieve watched movie data from local storage on initial mount
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
