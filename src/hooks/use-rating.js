import { useCallback } from "react";

const useRating = () => {
  const getStars = useCallback((value) => {
    const stars = [];
    const [whole, part] = parseFloat(value).toString().split(".");

    for (let i = 0; i < whole; i++) {
      stars.push(100);
    }

    if (part) {
      stars.push(50);
    }

    for (let i = whole; i < (part ? 4 : 5); i++) {
      stars.push(0);
    }

    return stars;
  }, []);

  return {
    getStars,
  };
};

export default useRating;
