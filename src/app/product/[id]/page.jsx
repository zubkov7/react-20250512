// "use client";
// import { useParams } from "next/navigation";

import { Suspense } from "react";
import { Product } from "./product";
import { ProductSlow } from "./product-slow";

export const generateStaticParams = () => {
  return [{ id: "MLXJ2LLA" }];
};

const Page = async ({ params }) => {
  const { id } = await params;

  return (
    <>
      <Suspense fallback='loading...'>
        <Product id={id} />
      </Suspense>
      <Suspense fallback='loading...'>
        <ProductSlow />
      </Suspense>
    </>
  );
};

export default Page;
