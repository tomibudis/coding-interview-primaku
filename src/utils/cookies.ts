import Cookies from "js-cookie";

const COOKIE_TOKEN_NAME = "jitera-token";

export const setCookieToken = (token: string) => {
  return Cookies.set(COOKIE_TOKEN_NAME, token);
};

export const getCookieToken = () => {
  return Cookies.get(COOKIE_TOKEN_NAME);
};

export const clearCookieToken = () => {
  return Cookies.remove(COOKIE_TOKEN_NAME);
};
