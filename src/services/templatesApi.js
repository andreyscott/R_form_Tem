import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let headers = new Headers();
headers.append('Access-Control-Allow-Origin', '*');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('GET', 'POST', 'OPTIONS');

const baseUrl = 'https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates';
const createRequest = (url) => ({ url, headers: headers, mode: 'no-cors'})

export const templatesApi = createApi({
    reducerPath: 'templates',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Template'],
    endpoints: (builder) => ({
        getTemplates: builder.query({
            query: () =>  createRequest('')
        }),
    })
});

export const { useGetTemplatesQuery } = templatesApi;