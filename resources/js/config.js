export const getHeader = function () {
    const tokenDate = JSON.parse(window.localStorage.getItem("authUser"));
    const headers = {
        Accept: "application/json",
        Authorization: "Bearer" + tokenDate.access_token,
    };
    return headers;
};
