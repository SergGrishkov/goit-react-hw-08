export const selectUser = (state) => state.auth.user;

export const selectToken = (state) => state.auth.token;

export const selectLoader = (state) => state.auth.loader;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectError = (state) => state.auth.error;
