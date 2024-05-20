import { FC } from "react";
import { ReposView } from "../ReposView/ReposView";
import { UserView } from "../UserView/UserView";
import { Data } from "../../types/misc";

type Props = {
  userData: {
    status: null | number;
    data: null | {
      avatar_url: string;
      login: string;
      bio: string;
      followers: number;
      public_repos: number;
    };
  };
  userRepos: {
    status: null | number;
    data: null | Data[];
  };
};

export const ContainerUser: FC<Props> = ({ userData, userRepos }) => {
  return (
    <>
      {userData.data !== null && userRepos.data !== null && (
        <div className="userInfoBox">
          <UserView userData={userData} />
          <ReposView userRepos={userRepos} />
        </div>
      )}
    </>
  );
};
