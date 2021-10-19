export const LOGGED_IN_STATUS = "isLoggedIn";

export const LoggedInOptions = {
    LOGGED_IN: "LOGGED_IN",
    LOGGED_OUT: "LOGGED_OUT"
}

export function setLoggedInStatus(value) {
  return {
    key: LOGGED_IN_STATUS,
    value
  };
}
