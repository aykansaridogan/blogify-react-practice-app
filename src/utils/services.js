import axios from "axios";

export const fetchData = endpoint => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then(res => resolve(res.data))
      .catch(e => reject(e));
  });
};
