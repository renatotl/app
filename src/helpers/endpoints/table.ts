import { endpoint } from 'helpers/endpoints';

export const table = {
    createTable: () => `${endpoint.baseUrl}/table`,
    listTables: () => `${endpoint.baseUrl}/table`,
    tableById: (id: string) => `${endpoint.baseUrl}/table/${id}`,
};