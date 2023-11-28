import { Link, Form } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { useLoaderData } from "react-router-dom";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const {
    meta: { categories, companies },
    params,
  } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;
  return (
    <>
      <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        {/* Search Product */}
        <FormInput
          label="search product"
          name="search"
          type="search"
          size="select-sm"
          defaultValue={search}
        />
        {/* CATEGORIES */}
        <FormSelect
          label="search category"
          name="category"
          list={categories}
          size="select-sm"
          defaultValue={category}
        />
        {/* COMPANIES */}
        <FormSelect
          label="search company"
          name="company"
          list={companies}
          size="select-sm"
          defaultValue={company}
        />
        {/* ORDER */}
        <FormSelect
          label="sort by"
          name="order"
          list={["a-z", "z-a", "high", "low"]}
          size="select-sm"
          defaultValue={order}
        />
        {/* ORDER */}
        <FormRange
          label="select price"
          name="price"
          size="range-sm"
          defaultValue={price}
        />
        <FormCheckbox label="free shipping" name="shipping" size="select-sm" />
        {/* BUTTONS */}
        <button type="submit" className="btn btn-primary btn-sm">
          Search
        </button>
        <Link to="/products" className="btn btn-accent btn-sm">
          reset
        </Link>
      </Form>
    </>
  );
};

export default Filters;

// 65079882
