export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return {
      Authorization: "Bearer " + user.token,
      "Access-Control-Allow-Origin": "*",
    };
  } else {
    return {};
  }
}
