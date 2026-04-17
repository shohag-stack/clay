import { client } from "./client";

export const sanityFetch = (query: string, params = {}) => {
  return client.fetch(query, params);
};