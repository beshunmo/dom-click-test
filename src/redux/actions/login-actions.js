// ACTION CREATORS
export const setLoginAC = email => ({
  type: 'SET_EMAIL',
  payload: email
});

export const setPasswordAC = password => ({
  type: 'SET_PASSWORD',
  payload: password
});

export const fieldValidationErrorsAC = validationError => ({
  type: 'SET_VALIDATION_ERRORS',
  payload: validationError
});

export const emailValidAC = emailValid => ({
  type: 'EMAIL_VALID',
  payload: emailValid
});

export const passwordValidAC = passwordValid => ({
  type: 'PASSWORD_VALID',
  payload: passwordValid
});

export const validateFormAC = validateForm => ({
  type: 'FORM_VALID',
  payload: validateForm
});

export const authorizedAC = authorized => ({
  type: 'SEND_AUTHORIZED',
  payload: authorized
});