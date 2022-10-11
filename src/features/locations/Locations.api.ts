import { createApi } from '@reduxjs/toolkit/query/react';
import { request, ClientError } from 'graphql-request';
import { GET_LOCATIONS } from './Locations.queries';
import { Locations } from './Locations.types';

const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ body }: { body: string }) => {
    try {
      const result = await request(baseUrl, body);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };

export const locationsApi = createApi({
  reducerPath: 'locations',
  baseQuery: graphqlBaseQuery({ baseUrl: 'https://flyby-gateway.herokuapp.com/' }),
  endpoints: (builder) => ({
    getLocations: builder.query<Locations, void | never>({
      query: () => ({
        body: GET_LOCATIONS
      }),
      transformResponse: (locations) => locations
    })
  })
});

export const { useGetLocationsQuery } = locationsApi;
