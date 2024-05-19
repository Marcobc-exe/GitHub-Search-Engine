import { api } from "../config";

export const getUserRepos = async (username: string) => {
  try {
    const abortController = new AbortController();

    return await api.get(`users/${username}/repos?sort=created`, {
      signal: abortController.signal,
    });
  } catch (error) {
    return error;
  }
};
