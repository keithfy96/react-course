import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";

const HomeLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  const isPageLoading = navigation.state === "loading";
  // console.log(isPageLoading);
  return (
    <>
      <Navbar />
      {isPageLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default HomeLayout;
