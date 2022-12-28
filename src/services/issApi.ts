import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IssLocation } from "../types/types";

export const IssApi = createApi({
  reducerPath: "IssLocationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.wheretheiss.at/v1/satellites/",
  }),
  endpoints: (builder) => ({
    getIssLocation: builder.query<IssLocation, string>({
      query: (type) => `/${type}`,
    }),
  }),
});

export const { useGetIssLocationQuery } = IssApi;
