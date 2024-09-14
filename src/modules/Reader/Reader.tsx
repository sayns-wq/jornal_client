"use client";

import { config } from "./config";
import Editor from "@/components/Editor/Editor";
import Loader from "@/components/Loader/Loader";
import { useGetOneArticleQuery } from "@/store/api/articleApi";
import { useParams } from "next/navigation";
let baseConfig = {
  ...config,
  data: {
    blocks: [],
  },
};
export default function Reader() {
  const pathName = useParams();
  const { article_id } = pathName;
  const { data, isLoading } = useGetOneArticleQuery(article_id);

  return isLoading ? (
    <Loader />
  ) : (
    <Editor
      config={baseConfig}
      isEditable={false}
      dataToRender={JSON.parse(data.data.articleData)}
      id="readerjs"
    />
  );
}
