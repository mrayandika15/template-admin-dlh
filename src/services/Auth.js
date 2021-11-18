import { ApiService } from "../utils";

const client = new ApiService();

export const login = (payload) => {
  return this.client.post("/login", payload);
};
