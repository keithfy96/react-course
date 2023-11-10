import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  const value = "some value";
  return (
    <>
      <Navbar />
      <div className="page">
        {isPageLoading ? (
          <div className="loading"></div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </div>
    </>
  );
};

export default HomeLayout;
