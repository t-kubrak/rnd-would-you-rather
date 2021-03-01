export function getAuthedUserProfile(state) {
    return state.authedUser ? state.users[state.authedUser] : null;
}