import { InputsType } from "@/app/createArticle/types";
import Input from "@/components/Input/Input";
import SelectComponent from "@/components/SelectComponent/Select";
import { useUpdateArticleMutation } from "@/store/api/articleApi";
import { useParams } from "next/navigation";
import {
  Control,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

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
  const [updateArticle] = useUpdateArticleMutation();
  const submit = (data: any) => {
    updateArticle({ id, ...data });
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input placeholder="Название" register={register("header")} />
      <SelectComponent
        register={register("tags")}
        control={control}
        name={"tags"}
      />
      <Input type="submit" placeholder="Done" />
    </form>
  );
}
