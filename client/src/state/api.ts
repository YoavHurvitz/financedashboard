import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'main',
  baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_API_URL}),
    tagTypes: [],
    endpoints: (build) => ({
      getKpis: build.query<void,void>({
        query: () => 'kpi/kpis',
        providesTags: ['Kpis'],
      }),
    }),
});

export const {useGetKpisQuery} = api;