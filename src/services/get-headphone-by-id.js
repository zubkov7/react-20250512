export const getHeadphoneById = async (id) => {
  const response = await fetch(`http://localhost:3001/api/product/${id}`);

  if (!response.ok) {
    return { error: response.status, data: null };
  }

  if (response.status === 404) {
    return { error: null, data: null };
  }

  const result = await response.json();

  return { error: null, data: result };
};
