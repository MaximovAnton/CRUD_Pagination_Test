import { usersAPI } from "../Api/Api"
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state
    }
}


export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getUsers = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setUsers( await usersAPI.getUsers()))
        dispatch(toggleIsFetching(false))
    }
}

export const postUsers = (newUser) => {
    return async(dispatch) => {
        await usersAPI.postUsers(newUser)
        dispatch(getUsers(dispatch))
    }
}

export const putUser = (id, newUser) => {
    return (dispatch) => {
        usersAPI.putUser(id, newUser)
        dispatch(getUsers(dispatch))
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
        usersAPI.deleteUser(id)
        dispatch(getUsers(dispatch))
    }
}

export default usersReducer