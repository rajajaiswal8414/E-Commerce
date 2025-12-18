import { useDispatch, useSelector } from "react-redux";
import { HeroBanner } from "./HeroBanner";
import { useEffect } from "react";
import { ProductCard } from "../components/shared/ProductCard";
import { Loader } from "../components/shared/Loader";
import { FaExclamationTriangle } from "react-icons/fa";

export const Home = () => {
  const { isLoading, isError, errorMessage } = useSelector(
    (state) => state.errors
  );
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCTS" });
  }, [dispatch]);

  return (
    <div className="lg:px-14 sm:px-8 px-4">
      <div className="py-6">
        <HeroBanner />
      </div>

      <div className="py-5">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="text-slate-800 text-4xl font-bold">Products</h1>
          <span className="text-slate-600 text-lg font-medium max-w-md text-center">
            Discover our handpicked selection of top-rated items just for you!
          </span>
        </div>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div className="flex justify-center items-center h-[200px]">
            <FaExclamationTriangle className="text-slate-800  text-3xl mr-2" />
            <span className="text-slate-800 text-lg font-medium">
              {errorMessage || "Failed to fetch products!"}
            </span>
          </div>
        ) : (
          <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
            {products &&
              products
                ?.slice(0, 8)
                .map((item, i) => <ProductCard key={i} {...item} />)}
          </div>
        )}
      </div>
    </div>
  );
};
