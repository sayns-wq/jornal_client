import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5500/article" }),
  tagTypes: ["ArticleUpdate", "ArticleDelete"],
  endpoints: (build) => ({
    postArticle: build.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["ArticleUpdate"],
    }),

    getOneArticle: build.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
    deleteOneArticle: build.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ArticleDelete"],
    }),
    getAllArticles: build.query<any[], void>({
      query: () => ({
        url: `/`,
        method: "GET",
      }),
      providesTags: ["ArticleUpdate", "ArticleDelete"],
    }),
    updateArticle: build.mutation({
      query: (body) => ({
        url: `/${body.id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["ArticleUpdate"],
    }),
  }),
});

export const {
  usePostArticleMutation,
  useGetOneArticleQuery,
  useGetAllArticlesQuery,
  useUpdateArticleMutation,
  useDeleteOneArticleMutation,
} = articleApi;
