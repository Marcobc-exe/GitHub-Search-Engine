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
import { ErrorProps, Input, UserProps, UserReposProps } from "./types/misc";
import { SpinLoader } from "./components/Loaders/SpinLoader";

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

  const [loading, setLoading]: useStateProp<null | boolean> = useState(null);

  const { control, getValues, handleSubmit } = useForm<Input>({
    defaultValues: { searcher: "" },
  });

  // Handler submit searcher btn
  const onClickSearcher = () => handleSubmit(handleSearchUser)();

  // Calling handlers getter user info functions
  const handleSearchUser = async () => {
    setLoading(true);
    resetUserDataState();
    resetUserReposState();
    await handleUserData();
    await handleUserRepos();
    setLoading(false);
  };

  const resetUserDataState = () => {
    if (userData.data !== null) {
      setUserData({
        status: null,
        data: null,
      });
    }
  };

  const resetUserReposState = () => {
    if (userRepos.data !== null) {
      setUserRepos({
        status: null,
        data: null,
      });
    }
  };

  const resetErrorUserState = () => {
    if (errorUser.status !== null) {
      setErrorUser({
        status: null,
        message: null,
        url: null,
      });
    }
  };

  const resetErrorUserRepos = () => {
    if (errorUser.status !== null) {
      setErrorRepos({
        status: null,
        message: null,
        url: null,
      });
    }
  };

  // Getting user profile info
  const handleUserData = async () => {
    const username = getValues("searcher");
    const response = await handleGetUserData(username);

    if ("message" in response) {
      resetUserDataState();
      setErrorUser(response);
    } else {
      resetErrorUserState();
      setUserData(response);
    }
  };

  // Getting user public repos info
  const handleUserRepos = async () => {
    const username = getValues("searcher");
    const response = await handleGetUserRepos(username);

    if ("message" in response) {
      resetUserReposState();
      setErrorRepos(response);
    } else {
      resetErrorUserRepos();
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
      <SpinLoader loading={loading} />
      {(errorUser.status !== null || errorRepos.status !== null) && (
        <ErrorMessage error={errorUser} />
      )}
      {userData.data !== null && userRepos.data !== null && (
        <div className="userInfoBox">
          <UserView userData={userData} />
          <ReposView userRepos={userRepos} />
        </div>
      )}
    </>
  );
};
