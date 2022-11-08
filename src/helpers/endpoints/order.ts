import { endpoint } from 'helpers/endpoints';

export const order = {
    createOrder: () => `${endpoint.baseUrl}/order`,
};