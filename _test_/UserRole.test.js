import dataSource, { initDB } from '../dist/db/datasource';
import { describe, it } from 'node:test'; 
import router , {AddUser , AddRole} from '../dist/router/userRouter'

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
      email: 'mohammad@gmail.com',
    };

    const url = "http://localhost:3000/user/register";

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      });

      // Check if the status code is 200
      expect(response.status).toBe(200);
    } catch (error) {
      // Handle fetch errors
      console.error('Fetch error:', error.message);
      throw error; // Re-throw the error to mark the test as failed
    }
  });
  it("Add role to DataBase" , async ()=>{
    const userCredentials = {
      firstNameu: 'testFirstName',
      lastNameu: 'testLastName',
      email: 'mohammad@gmail.com',
    };

    const url = "http://localhost:3000/user/addRole?ID=1";

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      });

      // Check if the status code is 200
      expect(response.status).toBe(200);
    } catch (error) {
      // Handle fetch errors
      console.error('Fetch error:', error.message);
      throw error; // Re-throw the error to mark the test as failed
    }
  })
});
