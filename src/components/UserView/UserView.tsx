import { FC } from "react";
import "./index.css";
import { Books, Users } from "@phosphor-icons/react";

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
};

export const UserView: FC<Props> = ({ userData }) => {
  return (
    <>
      {userData.data !== null && (
        <div className="userContainer">
          <img
            src={userData.data.avatar_url}
            alt="userAvatar"
            className="userAvatar"
          />
          <p className="userName">{userData.data.login}</p>
          <p className="userBio">{userData.data.bio}</p>

          <div>
            <p className="followers">
              <Users  weight="bold" size={16}/>
              <strong className="followersNum">
                {userData.data.followers}
              </strong>{" "}
              followers
            </p>
            <p className="publicRepos">
              <Books  weight="bold" size={16}/>
              <strong className="publicReposNum">
                {userData.data.public_repos}
              </strong>{" "}
              public repos
            </p>
          </div>
        </div>
      )}
    </>
  );
};
