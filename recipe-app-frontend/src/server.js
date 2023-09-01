import axios from "axios";

const post = (url, params) =>
  axios
    .post(url, params, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
      },
    })
    .catch((response) => {
      return Promise.reject(response);
    });

export { post };
