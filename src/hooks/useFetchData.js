// import { useEffect } from "react";
// import { fetchData } from "../features/dataSlice";
// import { useDispatch, useSelector } from "react-redux";

// function useFetchData() {
//   const dispatch = useDispatch();
//   const { items, status, error } = useSelector((state) => state.data);

//   useEffect(() => {
//     console.log("Current Status:", status);
//     if (status === "idle") {
//       console.log("Dispatching fetchData");
//       dispatch(fetchData());
//     }
//   }, [dispatch, status]);

//   return { items, status, error };
// }

// export default useFetchData;

import { useEffect } from "react";
import { fetchData } from "../features/dataSlice";
import { useDispatch, useSelector } from "react-redux";

function useFetchData() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    if (status === "idle" && items.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, status, items.length]);

  return { items, status, error };
}

export default useFetchData;
