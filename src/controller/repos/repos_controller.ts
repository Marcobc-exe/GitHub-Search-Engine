import { AxiosResponse } from "axios"
import { getUserRepos } from "../../api/repos/reposStore"

export const handleGetUserRepos = async (username: string) => {
  const response: AxiosResponse = await getUserRepos(username)

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
}