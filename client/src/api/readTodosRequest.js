const API_URL = `http://localhost:8080`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1NTk2NzU0NX0.e4gXgTHAx5PXMftBkgao1bD0BMT3-zTmpwQmL7hSJDY`;
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return fetch(`${API_URL}/todos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());
};
