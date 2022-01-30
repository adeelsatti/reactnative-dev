const url = 'https://jsonplaceholder.typicode.com/posts';

export const DeleteApiCall = async (id, options) => {
  const response = await fetch(url + id, options);
  return {response};
};

export const CreatePostApi = async options => {
  const response = await fetch(url, options);
  return {response};
};

export const UpdateApiCall = async (id, options) => {
  const response = await fetch(url + id, options);
  return {response};
};

export const FetchPostAPI = async () => {
  const response = await fetch(url);
  const result = await response?.json();
  return {result};
};
