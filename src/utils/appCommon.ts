// TODO : return type Bird
export const getCurrentBird = () => {
  if (sessionStorage.getItem("app")) {
    return JSON.parse(sessionStorage.getItem("app") as string).currentBird;
  }
  return null;
};
export const getCurrentRoom = () => {
  if (sessionStorage.getItem("app")) {
    return JSON.parse(sessionStorage.getItem("app") as string).currentRoom;
  }
  return null;
};
export const setToken = (token: string) => {
  localStorage.setItem("access_token", JSON.stringify(token));
};
export const getToken = () => {
  const token = localStorage.getItem("access_token")
    ? localStorage.getItem("access_token")
    : "";
  return token ? JSON.parse(token) : "";
};
