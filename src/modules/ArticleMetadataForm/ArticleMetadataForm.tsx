import { InputsType } from "@/app/createArticle/types";
import Input from "@/components/Input/Input";
import { useUpdateArticleMutation } from "@/store/api/articleApi";
import { useParams } from "next/navigation";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

type articleMetadataFormPropsType = {
  register: UseFormRegister<InputsType>;
  onSubmit: SubmitHandler<InputsType>;
  handleSubmit: UseFormHandleSubmit<InputsType>;
};

export default function ArticleMetadataForm({
  register,
  onSubmit,
  handleSubmit,
}: articleMetadataFormPropsType) {
  const { id } = useParams();
  const [updateArticle] = useUpdateArticleMutation();
  const submit = (data: any) => {
    updateArticle({ id, ...data });
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input placeholder="Название" register={register("header")} />
      <Input placeholder="Тег" register={register("tags")} />
      <Input type="submit" placeholder="Done" />
    </form>
  );
}
