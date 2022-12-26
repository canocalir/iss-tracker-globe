import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IssLocation, PeopleInSpace } from "../types/types";

export const IssApi = createApi({
  reducerPath: "IssLocationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    getIssLocation: builder.query<IssLocation, string>({
      query: (type) => `/${type}.json`,
    }),
    getPeopleInSpace: builder.query<PeopleInSpace,string>({
      query: (type) =>  `/${type}.json`
    })
  }),
});

export const { useGetIssLocationQuery, useGetPeopleInSpaceQuery } = IssApi
