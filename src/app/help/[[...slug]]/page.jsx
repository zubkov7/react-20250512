const Page = async ({ params }) => {
  const { slug } = await params;

  return <div>{slug?.join(",")}</div>;
};

export default Page;
