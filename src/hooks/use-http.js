import { useReducer, useCallback } from "react";

function httpReducer(state, action) {
  //console.log('------------http reducer-----------------');
  //console.log(state);
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }

  return state;
}

// if we pass the function in useHttp, we should define pending = true
function useHttp(requestFunction, startWithPending = false) {
  //console.log('------------use http--------------------');
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });
  //console.log('------------bf call backd--------------------');
  const sendRequest = useCallback(

    async function (requestData) {
      dispatch({ type: "SEND" });
      try {
        //console.log('------------dalam dispatch--------------------');
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
