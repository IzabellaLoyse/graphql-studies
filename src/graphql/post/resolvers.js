/* eslint-disable import/prefer-default-export */
const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts(`/${id}`);
  return response.json();
};

const posts = async (_, __, { getPosts }) => {
  const usersFetch = await getPosts();

  return usersFetch.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },

  Post: {
    unixTimestamp: ({ createdAt }) => {
      const timestamp = new Date(createdAt).getTime() / 1000;
      return Math.floor(timestamp);
    },
  },
};
