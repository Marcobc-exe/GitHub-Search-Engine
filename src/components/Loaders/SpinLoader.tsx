import { FC } from "react";
import LoadingSpin from "react-loading-spin";
import "./index.css"

type Props = {
  loading: null | boolean;
};

export const SpinLoader: FC<Props> = ({ loading }) => {
  return (
    <div className="loadingBox">
      {loading && <LoadingSpin primaryColor="#238636" />}
    </div>
  );
};
