export const selectLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.name;

export const selectRefreshing = state => state.auth.isRefreshing;
