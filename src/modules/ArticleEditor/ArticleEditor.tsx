"use client";

import { usePostArticleMutation } from "@/store/api/articleApi";
import Editor from "@/components/Editor/Editor";

export default function ArticleEditor() {
  const [createArticle] = usePostArticleMutation();

  const onSaveHandler = (body: any) => {
    createArticle(body);
  };
  return (
    <div>
      <Editor
        config={{}}
        isEditable={true}
        id="editorjs"
        onSave={onSaveHandler}
      />
    </div>
  );
}
