import axios from "axios";

export const key = "eb549928a982f557598210d69139fb46";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
