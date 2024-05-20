import { api } from "../config";

export const getUserData = async (username: string) => {
  try {
    const abortController = new AbortController();

    return await api.get(`users/${username}`, {
      signal: abortController.signal,
    });
  } catch (error) {
    return error;
  }
};
