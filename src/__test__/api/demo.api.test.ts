import axios from "axios";
import App from "../../App";
import config from "./config";
import supertest from "supertest";
const request = supertest(config.SERVER_URL);
jest.setTimeout(100000);
describe("", () => {
  test("should return demo weather list", () => {
    const response = request.get("/WeatherForecast").send().expect(200);
    // const list = response.data as any[];
    // expect(config.SERVER_URL).toBe("globird.azurewebsites.com");
    // expect(response.data).toBeTruthy();
    // expect(list.length).toBe(5);
  });
});
