import React, { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { getProduct } from "../services/ProductService";
import ProductView from "../components/Products/ProductView";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  genderState,
  priceState,
  ageState,
  declinedProductsState,
  productState,
} from "../components/States";

export default function Product() {
  const [product, setProduct] = useRecoilState(productState);
  const gender = useRecoilValue(genderState);
  const price = useRecoilValue(priceState);
  const age = useRecoilValue(ageState);
  const declinedProducts = useRecoilValue(declinedProductsState);

  useEffect(() => {
    requestProduct();
  }, []);

  function requestProduct() {
    getProduct(age, gender, price, declinedProducts).then((data) => {
      setProduct(data);
    });
  }

  return (
    <div className="h-screen ">
      <Disclosure as="nav" className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <h3 className="text-4xl font-extrabold text-indigo-500">
                  Te<span className="text-sky-500">ka</span>
                  <span className="text-teal-500">do</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>

      <div className="py-10 h-5/6">
        <main className="h-full">
          <div className="mx-auto sm:max-w-screen-sm max-w-7xl sm:px-6 lg:px-8 h-full ">
            <ProductView
              key={product.offer_id}
              id={product.offer_id}
              name={product.name}
              product_price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
              productUrl={product.productUrl}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
