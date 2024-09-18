import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFetchSearch } from "../../redux/userSlice";
import Card from "../utils/Card";
import useDebounce from "../customHooks/useDebouncing";

const Home = () => {
  const dispatch = useDispatch();
  const { searchedData, fetchSearch } = useSelector((state) => state.users);
  const debouncedValue = useDebounce(searchedData, 400);

  async function fetchData(item) {
    try {
      const datas = await fetch(
        `https://dummyjson.com/products/search?q=${item}`,
        {
          method: "GET",
          boday: JSON.stringify({
            q: item,
          }),
        }
      );
      if (datas.ok) {
        const resp = await datas.json();
        const updateResp = resp?.products.map((item) => {
          return {
            ...item,
            brand: item?.title,
            type: item?.brand,
            imageUrl: item.thumbnail,
          };
        });
        dispatch(setFetchSearch(updateResp));
      }
    } catch (error) {
      console.log(error);
    }
  }

  // const debounce = (func, delay) => {
  //   let timerId;
  //   return (...arg) => {
  //     clearTimeout(timerId);
  //     timerId = setTimeout(() => func(...arg), delay);
  //   };
  // };

  // const searchHandlerWithDebounce = useCallback(debounce(fetchData, 400), []);

  useEffect(() => {
    fetchData(debouncedValue);
  }, [debouncedValue]);

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
