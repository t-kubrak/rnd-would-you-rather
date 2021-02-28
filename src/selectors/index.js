export function getAuthedUserProfile(state) {
    return state.users[state.authedUser];
}