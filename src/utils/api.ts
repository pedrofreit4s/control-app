import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const TrateException = (data: any, success: any, error: any) => {
  if (data.success) {
    return success();
  }
  if (data.status !== 200 || data.status !== 201) {
    return error();
  }

  return success();
};

export default api;
