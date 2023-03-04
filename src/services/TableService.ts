
// Vamos até `src/services` e criaremos o arquivo `TableService.ts`:

import { Api } from "helpers/endpoints/Api";
import { endpoint } from "helpers/endpoints";
import { ErrorResponse } from "types/api/error";
import { Table, TableResponse } from "types/api/table";

export const TableService = {
  getLista: (): Promise<TableResponse[]> =>
    Api(endpoint.listTables(), {
      method: "GET",
    }).then((response) => response.json()),

  create: (table: Table) =>
    Api(endpoint.createTable(), {
      method: "POST",
      body: JSON.stringify(table),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json()),

  getById: (id: string) =>
    Api(endpoint.tableById(id), {
      method: "GET",
    }).then((response) => response.json()),

  updateById: (table: TableResponse): Promise<TableResponse & ErrorResponse> =>
    Api(endpoint.tableById(table.id), {
      method: "PATCH",
      body: JSON.stringify({ number: table.number }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json()),

  deleteById: (id: string) =>
    Api(endpoint.tableById(id), {
      method: "DELETE",
    }).then((response) => response.json()),
};