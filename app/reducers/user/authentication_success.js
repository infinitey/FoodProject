export default function (state, action ) {
  return Object.assign({}, state, {
    isAuthenticating: false,
    tokent: action.token
  });
}
