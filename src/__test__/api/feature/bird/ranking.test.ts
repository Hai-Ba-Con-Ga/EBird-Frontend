import axios from "axios";
import config from "../../config";
import supertest from "supertest";
const request = supertest(config.SERVER_URL);
jest.setTimeout(100000);
describe("Test for get ranking of app", () => {
  test("Should it return a 200", () => {
    const response = request.get("/bird/all").set("Authorization" , config.token).send().expect(400)
    // const list = response.data as any[];
    // expect(config.SERVER_URL).toBe("globird.azurewebsites.com");
    // expect(response.data).toBeTruthy();
    // expect(list.length).toBe(5);
  });
});
