import jwtDecode from "jwt-decode";
import { getCookie } from "./CookieUtils";

export default function getCurrentUser(currentUser) {
  const token = getCookie("x-access-token");
  const decoded = jwtDecode(token);
  currentUser = decoded.username;

  return currentUser;
}
