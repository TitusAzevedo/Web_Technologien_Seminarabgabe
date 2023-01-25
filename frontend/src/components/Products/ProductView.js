import { Tab } from "@headlessui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getProduct } from "../../services/ProductService";
import ProductDescription from "./ProductDescription";

import {
  genderState,
  priceState,
  ageState,
  declinedProductsState,
  productState,
} from "../States";
import { useEffect } from "react";

export default function ProductView({
  offer_id,
  name,
  description,
  product_price,
  imageUrl,
  productUrl,
}) {
  const [product, setProduct] = useRecoilState(productState);
  const gender = useRecoilValue(genderState);
  const price = useRecoilValue(priceState);
  const age = useRecoilValue(ageState);
  const [declinedProducts, setDeclinedProducts] = useRecoilState(
    declinedProductsState
  );

  const onClickDecline = (e) => {
    e.preventDefault();
    setDeclinedProducts([...declinedProducts, product.offer_id]);
  };

  useEffect(() => {
    getProduct(age, gender, price, declinedProducts).then((product) => {
      setProduct(product);
    });
  }, [declinedProducts]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h1>
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse pt-8">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"></div>

            <Tab.Panels className=" items-center justify-center flex">
              <Tab.Panel key={offer_id}>
                <img
                alt="product image"
                  src={imageUrl}
                  className="h-52 mx-auto object-cover object-center sm:rounded-lg"
                />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-4 px-4  sm:px-0 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {product_price} €
            </p>

            <h3 className="sr-only">Description</h3>
            <ProductDescription description={description} />

            <form className="mt-6">
              <div className="sm:flex-col1 mt-10 flex gap-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={productUrl}
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Zum Produkt
                </a>

                <button
                  type="submit"
                  onClick={onClickDecline}
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border-2 border-indigo-600 text-indigo-600 py-3 px-8 text-base font-medium sm:w-full"
                >
                  Gefällt mir nicht
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
