import { FC } from "react";
import "./index.css";

type Props = {
  error: {
    status: null | number;
    message: null | string;
    url: null | string;
  };
};

export const ErrorMessage: FC<Props> = ({ error }) => {
  return (
    <div className="container">
      <h1 className="title">
        {error.status} {error.message}
      </h1>
      <p className="url">{error.url}</p>
    </div>
  );
};
