// "use client";
// import { useParams } from "next/navigation";

import { notFound } from "next/navigation";

export const Product = async ({ id }) => {
  const result = await fetch(`http://localhost:3001/api/product/${id}`);

  const headphone = await result.json();

  if (!headphone) {
    return notFound();
  }

  console.log(`product page - ${id}`);
  //   const { id } = useParams();
  return <div>product page - {headphone.name}</div>;
};
