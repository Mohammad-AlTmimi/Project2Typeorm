import express from 'express';
namespace TypeUser {
  export interface Item {
    id: Number,
    password: string,
    fullName: string
  }

  export interface Request extends express.Request {
    body: ( {
      id: Number ,
      password: string | " ",
      fullName: string | " "
    }),
    query: {
      page: string;
      pageSize: string;
    }
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