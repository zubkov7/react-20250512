export const getCodecsByHeadphoneId = async (headphoneId) => {
  const result = await fetch(
    `http://localhost:3001/api/codecs?productId=${headphoneId}`
  );

  return result.json();
};
