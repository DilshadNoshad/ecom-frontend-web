import { useCallback, useEffect, useState } from "react";

const useLoadMore = (limitData, compairData) => {
  const [isVisible, setIsVisible] = useState(limitData);
  const [dataLoaded, setDataLoaded] = useState(false);

  // console.log(isVisible, compairData.length);
  const loadMore = useCallback(() => {
    setIsVisible((previousState) => previousState + limitData);
  }, [limitData]);

  useEffect(() => {
    if (isVisible >= compairData.length) {
      setDataLoaded(true);
    }
  }, [isVisible, compairData]);

  return {
    isVisible,
    dataLoaded,
    loadMore,
  };
};

export default useLoadMore;
