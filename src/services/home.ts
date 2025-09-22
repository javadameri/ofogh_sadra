import { API } from "./api";
import { endpoints } from "./endpoint";

export const slider = async () => {
  return await API(endpoints.home.slider);
};