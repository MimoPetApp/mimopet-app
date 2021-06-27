export const getLocalToken = () => localStorage.getItem("token");
export const deleteLocalToken = () => localStorage.clear();
export const setLocalToken = token => {
  localStorage.setItem("token", token);
};
