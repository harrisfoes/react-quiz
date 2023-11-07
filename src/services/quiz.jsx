import axios from "axios";

const getAll = (category, difficulty) => {
  const baseUrl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
  console.log(baseUrl, "requested");
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export default getAll;
