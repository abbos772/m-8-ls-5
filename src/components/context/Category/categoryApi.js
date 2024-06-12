import { api } from '../Api/index'
export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (params) => ({ 
        url: `/products/category-list`, 
        method: 'GET',
        params 
      }),
      providesTags:[""]
    }),
  }),
})

export const {
 useGetCategoryQuery
} = categoryApi