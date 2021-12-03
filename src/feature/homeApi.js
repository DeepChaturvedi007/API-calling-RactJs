import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const homeApi = createApi({
  reducerPath: 'home',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/search' }),
  endpoints: (builder) => ({
    getList: builder.mutation({
      query: (name) => ({
        url : `users?q=${name}&per_page=${9}`,
        method: "GET",
      })
    }),

    getPagination: builder.mutation({
      query: ({name,page,per_page}) => ({
        url : `users?q=${name}&page=${page}&per_page=${9}`,
        method: "GET",
      })
    }),

  }),
})

export const { useGetListMutation , useGetPaginationMutation} = homeApi
