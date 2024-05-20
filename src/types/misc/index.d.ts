export type Input = {
  searcher: string;
};

export type ErrorProps = {
  status: null | number;
  message: null | string;
  url: null | string;
};

export type UserProps = {
  status: null | number;
  data: null | {
    avatar_url: string;
    login: string;
    bio: string;
    followers: number;
    public_repos: number;
  };
};

export type Data = {
  name: string;
  description: string;
};

export type UserReposProps = {
  status: null | number;
  data: null | Data[];
};
