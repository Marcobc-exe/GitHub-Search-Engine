import { useForm } from "react-hook-form";
import "./App.css";
import { handleGetUserData } from "./controller/users/users_controller";
import { SearcherBtn } from "./components/buttons/SearcherBtn";
import { SearchUserInpt } from "./components/Input/SearchUserInpt";

type Input = {
  searcher: string;
};

export const GitHubUser = () => {
  const { control, getValues, handleSubmit } = useForm<Input>({
    defaultValues: { searcher: "" },
  });

  const onClickSearcher = () => handleSubmit(handleSearchUser)();

  const handleSearchUser = async () => {
    const username = getValues("searcher");
    await handleGetUserData(username);
  };

  return (
    <>
      <h1 className="title">GitHub Search Engine</h1>
      <div className="boxSearcher">
        <SearchUserInpt control={control} />
        <SearcherBtn onClick={onClickSearcher} />
      </div>
    </>
  );
};
