import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IssLocation, PeopleInSpace } from "../types/types";

export const IssApi = createApi({
  reducerPath: "IssLocationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.open-notify.org/",
  }),
  endpoints: (builder) => ({
    getIssLocation: builder.query<IssLocation, string>({
      query: () => `/iss-now.json`,
    }),
    getPeopleInSpace: builder.query<PeopleInSpace,string>({
      query: () =>  `/astros.json`
    })
  }),
});

export const { useGetIssLocationQuery, useGetPeopleInSpaceQuery } = IssApi
