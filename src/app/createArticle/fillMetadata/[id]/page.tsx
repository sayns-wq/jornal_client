"use client";
import styles from "../../createArticle.module.css";
import ArticleMetadataForm from "@/modules/ArticleMetadataForm/ArticleMetadataForm";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputsType } from "../../types";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function CreateArticle() {
  const { register, handleSubmit, control } = useForm<InputsType>();
  const onSubmit: SubmitHandler<InputsType> = (data) => console.log(data);
  return (
    <Provider store={store}>
      <main className={styles.mainPage}>
        <ArticleMetadataForm
          register={register}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          control={control}
        />
      </main>
    </Provider>
  );
}
