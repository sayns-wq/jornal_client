"use client";

import { usePostArticleMutation } from "@/store/api/articleApi";
import Editor from "@/components/Editor/Editor";

export default function ArticleEditor() {
  const [createArticle] = usePostArticleMutation();

  const onSaveHandler = async (body: any) => {
    return await createArticle(body);
  };
  return (
    <Editor
      config={{}}
      isEditable={true}
      id="editorjs"
      onSave={onSaveHandler}
    />
  );
}
