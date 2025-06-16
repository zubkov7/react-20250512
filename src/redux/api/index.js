import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getHeadphones: builder.query({
      query: () => "/products",
    }),
    getHeadphoneById: builder.query({
      query: (headphoneId) => `/product/${headphoneId}`,
    }),
    getReviewsByHeadphoneId: builder.query({
      query: (headphoneId) => `/reviews?productId=${headphoneId}`,
      providesTags: [{ type: "Reviews", id: "all" }],
    }),
    addReview: builder.mutation({
      query: ({ headphoneId, review }) => ({
        url: `/review/${headphoneId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: [{ type: "Reviews", id: "all" }],
    }),
  }),
});

export const {
  useGetHeadphonesQuery,
  useLazyGetHeadphonesQuery,
  useGetHeadphoneByIdQuery,
  useGetReviewsByHeadphoneIdQuery,
  useAddReviewMutation,
} = api;
