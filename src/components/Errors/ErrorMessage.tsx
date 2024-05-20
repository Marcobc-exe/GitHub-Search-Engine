import { FC } from "react";
import "./index.css";

type Props = {
  errorUser: {
    status: null | number;
    message: null | string;
    url: null | string;
  };
  errorRepos: {
    status: null | number;
    message: null | string;
    url: null | string;
  };
  loading: null | boolean;
};

export const ErrorMessage: FC<Props> = ({ errorUser, errorRepos, loading }) => {
  return (
    <>
      {!loading && errorUser.status !== null ? (
        <div className="container">
          <h1 className="title">
            {errorUser.status} {errorUser.message}
          </h1>
          <p className="url">{errorUser.url}</p>
        </div>
      ) : (
        !loading && errorRepos.status !== null && (
          <div className="container">
            <h1 className="title">
              {errorRepos.status} {errorRepos.message}
            </h1>
            <p className="url">{errorRepos.url}</p>
          </div>
        )
      )}
    </>
  );
};
