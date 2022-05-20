const SET_INITIALIZED = 'SET_INITIALIZED'

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false,
}

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializeApp = () => (dispatch: any) => {
        dispatch(initializedSuccess())
}

type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}

export const initializedSuccess = (): InitializedSuccessActionType => ({ type: SET_INITIALIZED })

export default appReducer