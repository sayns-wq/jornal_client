import { InputsType } from "@/app/createArticle/types";
import Input from "@/components/Input/Input";
import SelectComponent from "@/components/SelectComponent/Select";
import { useUpdateArticleMutation } from "@/store/api/articleApi";
import { useParams } from "next/navigation";
import styles from "./articleMetadataForm.module.css";
import {
  Control,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

type articleMetadataFormPropsType = {
  register: UseFormRegister<InputsType>;
  onSubmit: SubmitHandler<InputsType>;
  handleSubmit: UseFormHandleSubmit<InputsType>;
  control: Control<InputsType, any>;
};

export default function ArticleMetadataForm({
  register,
  onSubmit,
  handleSubmit,
  control,
}: articleMetadataFormPropsType) {
  const { id } = useParams();
  const router = useRouter();
  const [updateArticle] = useUpdateArticleMutation();

  const submit = (data: any) => {
    updateArticle({ id, ...data }).then(() => {
      router.push("/");
    });
  };
  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(submit)}>
      <Input placeholder="Название" register={register("header")} />
      <SelectComponent control={control} name={"tags"} placeholder="Тег" />
      <Button type="submit" placeholder="Отправить" />
    </form>
  );
}
