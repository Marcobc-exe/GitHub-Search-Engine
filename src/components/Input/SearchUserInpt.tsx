import { FC } from "react";
import { Controller } from "react-hook-form";
import { control } from "../../types/ReactHookFormTypes/types";

type Props = {
  control: control;
};

export const SearchUserInpt: FC<Props> = ({ control }) => {
  return (
    <Controller
      control={control}
      name="searcher"
      rules={{
        required: {
          message: "Username required",
          value: true,
        },
      }}
      render={({ field: { onChange, value }, formState: { errors } }) => {
        // console.log(errors);
        return (
          <input
            type="text"
            placeholder="Username"
            className="searcher"
            onChange={onChange}
            value={value}
            style={{
              borderColor: errors?.searcher ? "#db5757" : "#30363d",
            }}
          />
        );
      }}
    />
  );
};
