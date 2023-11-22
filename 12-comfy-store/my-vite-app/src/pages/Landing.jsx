import { Hero } from "../components";
import FeaturedProducts from "../components/FeaturedProducts";
import { customFetch } from "../utils";

const url = "/products?featured=true";

export const loader = async ({ request }) => {
  try {
    const resp = await customFetch(url);
    // console.log(resp);
    const products = resp.data.data;
    // console.log(products);
    return { products };
  } catch (error) {
    console.log(error);
  }
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
