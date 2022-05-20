export const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const putUser = (state) => {
    return state.usersPage.putUser
}

export const deleteUser = (state) => {
    return state.usersPage.deleteUser
}



