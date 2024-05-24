import React, { useCallback, useEffect, useState } from "react";
import OverlayRight from "../utils/Overlay";
import { useDispatch, useSelector } from "react-redux";
import { setFetchSearch, setIsOpenInfoOverlay } from "../../redux/slice";
import Card from "../utils/Card";

const Home = () => {
  const dispatch = useDispatch();
  const { searchedData, fetchSearch } = useSelector((state) => state.users);

  const fetchData = async (item) => {
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
  };

  const debounce = (func, delay) => {
    let timerId;
    return (...arg) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => func(...arg), delay);
    };
  };

  const searchHandlerWithDebounce = useCallback(debounce(fetchData, 400), []);

  useEffect(() => {
    searchHandlerWithDebounce(searchedData);
  }, [searchedData]);

  return (
    <section className="container flex card flex-justfy-around">
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
