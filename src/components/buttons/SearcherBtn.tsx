import { BookBookmark } from "@phosphor-icons/react";
import { FC } from "react";

type Props = {
  onClick: () => void;
};

export const SearcherBtn: FC<Props> = ({ onClick }) => {
  return (
    <button className="btnSearcher" onClick={onClick}>
      <BookBookmark size={17} weight="bold" />
      Search
    </button>
  );
};
