
export default {
    getUsers: (state) => state.users,
    getUserActive: (state) => state.userActive,
    getUser: (state) => (id) => state.users.find(user => user.id == id),
}