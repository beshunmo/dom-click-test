const appReducerInitState = {
  email: '',
  password: '',
  formErrors: { email: '', password: '' },
  emailValid: false,
  passwordValid: false,
  formValid: false,
  authorized: false
};

export default function loginReducer(state = appReducerInitState, action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_VALIDATION_ERRORS':
      return { ...state, formErrors: action.payload };
    case 'EMAIL_VALID':
      return { ...state, emailValid: action.payload };
    case 'PASSWORD_VALID':
      return { ...state, passwordValid: action.payload };
    case 'FORM_VALID':
      return { ...state, formValid: action.payload };
    case 'SEND_AUTHORIZED':
      return { ...state, authorized: action.payload };
    default:
      return state;
  }
}
