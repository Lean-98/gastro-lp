import { useState } from 'react';

export function useCount() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    if (count < 30 || count < 0) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return { count, handleDecrement, handleIncrement };
}
