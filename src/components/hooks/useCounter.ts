import { useState } from "react";

interface UseCounterOptions {
  initialValue?: number;
  limit?: number;
  shouldLoop?: boolean;
}

export const useCounter = ({
  initialValue = 0,
  limit,
  shouldLoop = false,
}: UseCounterOptions) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if (limit !== undefined && count >= limit) {
      setCount(shouldLoop ? initialValue : limit);
    } else {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (limit !== undefined && count <= 0) {
      setCount(shouldLoop ? limit : 0);
    } else {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset, setCount };
};
