/* eslint-disable import/prefer-default-export */

const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers(`/${id}`);
  const userFetch = await response.json();

  return userFetch;
};

const users = async (_, __, { getUsers }) => {
  const usersFetch = await getUsers();

  return usersFetch.json();
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
