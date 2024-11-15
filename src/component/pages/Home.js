import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../utils/Card";
import useDebounce from "../customHooks/useDebouncing";
import { fetchData } from "../service/service";
import { setFetchSearch } from "../../redux/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { searchedData, fetchSearch } = useSelector((state) => state.users);
  const debouncedValue = useDebounce(searchedData, 400);

  const handleFetchData = useCallback(
    async (item) => {
      const result = await fetchData(item);
      if (result) {
        dispatch(setFetchSearch(result));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    handleFetchData(debouncedValue);
  }, [debouncedValue, handleFetchData]);

  return (
    <section className="flex card flex-justfy-around">
      {fetchSearch.length > 0 &&
        fetchSearch.map((item, index) => {
          return (
            <div className="card-container flex-direction-colm" key={index}>
              <Card
                item={item}
                cardStyle={"flex card-text-container flex-direction-colm"}
              />
            </div>
          );
        })}
    </section>
  );
};

export default Home;
