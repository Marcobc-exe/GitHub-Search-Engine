import { AxiosResponse } from "axios";
import { getUserData } from "../../api/users/usersStore";

export const handleGetUserData = async (username: string) => {
  const response: AxiosResponse = await getUserData(username);

  if ("message" in response) {
    console.log(response.message);
    console.log(response.response.config.url);
    console.log(response.response.status);
    console.log(response.response.data.message);
  } else {
    console.log(response);
  }
};
