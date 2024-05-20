import { FC } from "react";
import "./index.css";
import { BookBookmark } from "@phosphor-icons/react";

type Data = {
  name: string;
  description: string;
};

type Props = {
  userRepos: {
    status: null | number;
    data: null | Data[];
  };
};

export const ReposView: FC<Props> = ({ userRepos }) => {
  return (
    <>
      {userRepos.data !== null && (
        <div className="reposContainer">
          {userRepos.data.map((repo) => (
            <div 
              key={repo.name} 
              className="repoBox" 
              style={{
                minHeight: repo.description !== null ? "100px" : "0px"
              }}
            >
              <div className="repoNameBox">
                <BookBookmark size={20}/>
                <p className="repoName">{repo.name}</p>
              </div>
              {repo.description !== null && <p>{repo.description}</p>}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
