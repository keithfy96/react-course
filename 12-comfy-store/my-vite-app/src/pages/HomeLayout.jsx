import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  const isPageLoading = navigation.state === "loading";
  // console.log(isPageLoading);
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
