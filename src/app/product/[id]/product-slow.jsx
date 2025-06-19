// "use client";
// import { useParams } from "next/navigation";

export const ProductSlow = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <div>product slow</div>;
};
