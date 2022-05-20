import usersReducer from './users-reducer'

let store = {
    _state: {
        usersPage:{
            
        },
    },
    _callSubscriber() {
            console.log('rerender')
    },
    getState(){
            return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },
    dispatch(action){
        this._state.profilePage = usersReducer(this._state.profilePage, action) 

        this._callSubscriber(this.state)
    }
}

window.store = store

export default store