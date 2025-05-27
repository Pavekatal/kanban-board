export const userLS = () => {
  try {
    return window.localStorage.getItem("userInfo")
      ? JSON.parse(window.localStorage.getItem("userInfo"))
      : null;
  } catch {
    return null;
  }
};
