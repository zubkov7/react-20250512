export const getHeadphones = async () => {
  const response = await fetch("http://localhost:3001/api/products", {
    cache: "no-store",
    next: {
      // revalidate: 10,
      // tags: ["getHeadphones"],
    },
  });

  if (!response.ok) {
    return { error: response.status, data: null };
  }

  if (response.status === 404) {
    return { error: null, data: null };
  }

  const result = await response.json();

  return { error: null, data: result };
};
