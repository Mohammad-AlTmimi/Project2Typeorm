import express from 'express';
namespace TypeUser {
  export interface Item {
    id: Number,
    password: string,
    fullName: string
  }

  export interface Request extends express.Request {
    body: {
      id: number; // Corrected type to 'number' (lowercase)
      password: string | " ";
      fullName: string | " ";
    };
    query: express.Request['query']; // Use the type from express.Request for 'query'
  }

  export interface Response extends express.Response {
    send: (body: string | {
      page: number,
      pageSize: number,
      total: number,
      items: Array<Item>  | object // Item[]
    }) => this
  }
}

export default TypeUser;