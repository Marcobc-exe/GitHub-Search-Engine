import { useForm } from "react-hook-form";
import "./App.css";
import { handleGetUserData } from "./controller/users/users_controller";
import { SearcherBtn } from "./components/buttons/SearcherBtn";
import { SearchUserInpt } from "./components/Input/SearchUserInpt";
import { useState } from "react";
import { useStateProp } from "./types/ReactTypes/types";
import { ErrorMessage } from "./components/Errors/ErrorMessage";
import { UserView } from "./components/UserView/UserView";
import { handleGetUserRepos } from "./controller/repos/repos_controller";
import { ReposView } from "./components/ReposView/ReposView";

type Input = {
  searcher: string;
};

type ErrorProps = {
  status: null | number;
  message: null | string;
  url: null | string;
};

type UserProps = {
  status: null | number;
  data: null | {
    avatar_url: string;
    login: string;
    bio: string;
    followers: number;
    public_repos: number;
  };
};

type Data = {
  name: string;
  description: string;
};

type UserReposProps = {
  status: null | number;
  data: null | Data[];
};

export const GitHubUser = () => {
  const [errorUser, setErrorUser]: useStateProp<ErrorProps> = useState({
    status: null,
    message: null,
    url: null,
  });

  const [errorRepos, setErrorRepos]: useStateProp<ErrorProps> = useState({
    status: null,
    message: null,
    url: null,
  });
  const [userData, setUserData]: useStateProp<UserProps> = useState({
    status: null,
    data: null,
  });
  const [userRepos, setUserRepos]: useStateProp<UserReposProps> = useState({
    status: null,
    data: null,
  });

  const { control, getValues, handleSubmit } = useForm<Input>({
    defaultValues: { searcher: "" },
  });

  const onClickSearcher = () => handleSubmit(handleSearchUser)();

  const handleSearchUser = async () => {
    await handleUserData();
    await handleUserRepos();
  };

  const handleUserData = async () => {
    const username = getValues("searcher");
    const response = await handleGetUserData(username);

    if ("message" in response) {
      if (userData.data !== null) {
        setUserData({
          status: null,
          data: null,
        });
      }
      setErrorUser(response);
    } else {
      if (errorUser.status !== null) {
        setErrorUser({
          status: null,
          message: null,
          url: null,
        });
      }
      setUserData(response);
    }
  };

  const handleUserRepos = async () => {
    const username = getValues("searcher");
    const response = await handleGetUserRepos(username);

    if ("message" in response) {
      if (userRepos.data !== null) {
        setUserRepos({
          status: null,
          data: null,
        });
      }
      setErrorRepos(response);
    } else {
      if (errorUser.status !== null) {
        setErrorRepos({
          status: null,
          message: null,
          url: null,
        });
      }
      setUserRepos(response);
    }
  };

  return (
    <>
      <h1 className="title">GitHub Search Engine</h1>
      <div className="boxSearcher">
        <SearchUserInpt control={control} />
        <SearcherBtn onClick={onClickSearcher} />
      </div>

      {(errorUser.status !== null || errorRepos.status !== null) && (
        <ErrorMessage error={errorUser} />
      )}
      {userData.data !== null && (
        <div className="userInfoBox">
          <UserView userData={userData} />
          <ReposView userRepos={userRepos} />
        </div>
      )}
    </>
  );
};
