import React, { useState } from "react";
import Filters from "../components/Filters";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";
import { PaginationContainer } from "../components";

const url = "/products";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(request);
  const resp = await customFetch(url, { params });
  const products = resp.data.data;
  const meta = resp.data.meta;
  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />

      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
