import { HeadphoneContainer } from "../headphone/headphone-container";

export const HeadphoneLayout = async ({ children, params }) => {
  const { headphoneId } = await params;

  return (
    <div>
      <HeadphoneContainer id={headphoneId} />
      {children}
    </div>
  );
};
