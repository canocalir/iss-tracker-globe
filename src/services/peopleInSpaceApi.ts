import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { PeopleInSpace } from "../types/types";

export const PeopleInSpaceApi = createApi({
    reducerPath: 'InSpaceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://www.howmanypeopleareinspacerightnow.com/`,
    }),
    endpoints: (builder) => ({
        getPeopleInSpace: builder.query<PeopleInSpace,string>({
            query: (type) =>  `/${type}.json`
          }) 
    })
})

export const { useGetPeopleInSpaceQuery } = PeopleInSpaceApi