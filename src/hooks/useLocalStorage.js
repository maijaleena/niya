import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) {
    return savedValue;
  }
  // if initialValue is a function, return outcome of Function
  if (initialValue instanceof Function) return initialValue();
  //else return initial Value
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  // Stringifying value, because you can only pass Strings to local storage.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
