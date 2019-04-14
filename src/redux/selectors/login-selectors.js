export const selectEmail = state => (state.login.email);
export const selectPassword = state => (state.login.password);
export const selectFormErrors = state => (state.login.formErrors);
export const selectEmailValid = state => (state.login.emailValid);
export const selectPasswordValid = state => (state.login.passwordValid);
export const selectForm = state => (state.login.formValid);
export const selectAuthorized = state => (state.login.authorized);

