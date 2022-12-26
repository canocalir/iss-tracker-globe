import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IssLocation, PeopleInSpace } from "../types/types";

export const IssApi = createApi({
  reducerPath: "IssLocationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://5ed24c67-3bee-4c64-bb1b-8453c0483738.mock.pstmn.io",
  }),
  endpoints: (builder) => ({
    getIssLocation: builder.query<IssLocation, string>({
      query: (type) => `/${type}`,
    }),
    getPeopleInSpace: builder.query<PeopleInSpace,string>({
      query: (type) =>  `/${type}.json`
    })
  }),
});

export const { useGetIssLocationQuery, useGetPeopleInSpaceQuery } = IssApi
