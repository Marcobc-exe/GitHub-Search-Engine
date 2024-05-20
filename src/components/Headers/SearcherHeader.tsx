import { FC } from "react";
import { control } from "../../types/ReactHookFormTypes/types";
import { SearcherBtn } from "../buttons/SearcherBtn";
import { SearchUserInpt } from "../Input/SearchUserInpt";

type Props = {
  control: control;
  onClickSearcher: () => void;
};

export const SearcherHeader: FC<Props> = ({ control, onClickSearcher }) => {
  return (
    <div className="boxSearcher">
      <SearchUserInpt control={control} />
      <SearcherBtn onClick={onClickSearcher} />
    </div>
  );
};
