// "use client";
// import { useParams } from "next/navigation";

import { notFound } from "next/navigation";

export const Product = async ({ id }) => {
  //   const result1 = await fetch(`http://localhost:3001/api/product/${id}`);
  //   const result2 = await fetch(`http://localhost:3001/api/product/${id}`);

  const [result1, result2] = await Promise.all([
    fetch(`http://localhost:3001/api/product/${id}`),
    fetch(`http://localhost:3001/api/product/${id}`),
  ]);

  const headphone = await result1.json();

  if (!headphone) {
    return notFound();
  }

  

  console.log(`product page - ${id}`);
  //   const { id } = useParams();
  return <div>product page - {headphone.name}</div>;
};
