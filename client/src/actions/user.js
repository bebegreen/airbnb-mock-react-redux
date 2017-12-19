import axios from 'axios';

export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const TRY_LOGIN = 'TRY_LOGIN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const TOGGLE_LOGIN_FORM = 'SHOW_LOGIN_FORM';

export const tryLogin = () => ({ type: TRY_LOGIN });
export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });
export const loginFailure = error => ({ type: LOGIN_FAILURE, error });
export const toggleLoginForm = () => ({ type: TOGGLE_LOGIN_FORM });

export const loginRequest = (email, password) => {
  return dispatch => {
    dispatch(tryLogin());

    axios
      .post('/api/users/login', { email, password })
      .then(res => {
        const token = res.data.token;
        localStorage.token = token;
        axios.defaults.headers.common['Authorization'] = token;
        setTimeout(function() {
          dispatch(login());
        }, 2000);
      })
      .catch(({ response: { status } }) => {
        setTimeout(function() {
          dispatch(loginFailure(status));
        }, 2000);
      });
  };
};
