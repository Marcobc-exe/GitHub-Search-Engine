import { AxiosResponse } from "axios";
import { getUserData } from "../../api/users/usersStore";

export const handleGetUserData = async (username: string) => {
  const response: AxiosResponse = await getUserData(username);

  if ("message" in response) {
    return {
      status: response.response.status,
      message: response.response.data.message,
      url: response.response.config.url,
    };
  } else {
    return {
      status: response.status,
      data: response.data,
    };
  }
};
