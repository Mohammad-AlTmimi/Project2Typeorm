import dataSource, { initDB } from '../db/datasource';
import { login } from "../dist/controllers/user.js";
import jwt from 'jsonwebtoken';
import { describe, it } from 'node:test'; 
import router from '../router/userRouter.js'

beforeAll(async () => {
  await initDB();
});

afterAll(async () => {
  await dataSource.destroy();
});

describe("TEST insert User AND INSERTROLE", () => {
    it("should register a user successfully", async () => {
      const userCredentials = {
        firstNameu: 'testFirstName',
        lastNameu: 'testLastName',
        email:'mohammad@gmail.com'
      };
  
      // Assuming your "/register" endpoint expects a JSON body with credentials
      return request(router)
        .post("/register")
        .send(userCredentials)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.statusCode).toBe(200);
          // Add more assertions based on your expected response
        });
    });
  });