import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5500/article" }),
  endpoints: (build) => ({
    postArticle: build.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body: body,
      }),
    }),

    getOneArticle: build.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),

    getAllArticles: build.query({
      query: () => ({
        url: `/`,
        method: "GET",
      }),
    }),
    updateArticle: build.mutation({
      query: (body) => ({
        url: `/${body.id}`,
        method: "PATCH",
        body: body,
      }),
    }),
  }),
});

export const {
  usePostArticleMutation,
  useGetOneArticleQuery,
  useGetAllArticlesQuery,
  useUpdateArticleMutation,
} = articleApi;
