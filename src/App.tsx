import { useForm } from "react-hook-form";
import "./App.css";
import { handleGetUserData } from "./controller/users/users_controller";
import { SearcherBtn } from "./components/buttons/SearcherBtn";
import { SearchUserInpt } from "./components/Input/SearchUserInpt";
import { useState } from "react";
import { useStateProp } from "./types/ReactTypes/types";
import { ErrorMessage } from "./components/Errors/ErrorMessage";

type Input = {
  searcher: string;
};

type ErrorProps = {
  status: null | number;
  message: null | string;
  url: null | string;
};

export const GitHubUser = () => {
  const [error, setError]: useStateProp<ErrorProps> = useState({
    status: null,
    message: null,
    url: null,
  });
  const { control, getValues, handleSubmit } = useForm<Input>({
    defaultValues: { searcher: "" },
  });

  const onClickSearcher = () => handleSubmit(handleSearchUser)();

  const handleSearchUser = async () => {
    const username = getValues("searcher");
    const response = await handleGetUserData(username);

    if ("message" in response) {
      setError(response);
    } else {
      if (error.status !== null) {
        setError({
          status: null,
          message: null,
          url: null,
        });
      }
    }
  };

  return (
    <>
      <h1 className="title">GitHub Search Engine</h1>
      <div className="boxSearcher">
        <SearchUserInpt control={control} />
        <SearcherBtn onClick={onClickSearcher} />
      </div>

      {error.status !== null ? (
        <ErrorMessage error={error} />
      ): (
        <></>
      )}
    </>
  );
};
