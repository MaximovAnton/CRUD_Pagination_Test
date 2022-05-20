import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://23.88.43.148/'
})

export const usersAPI = {
    getUsers() {
        return instance.get('users')
            .then(response => {
                return response.data
            })
            .catch(error => console.log(error))
    },
    postUsers(newUser) {
        console.log(newUser)
        return instance.post('users', newUser)
    },
    putUser(id, newUser){
        return instance.put(`user/${id}`, newUser)
    },
    deleteUser(id){
        return instance.delete(`user/${id}`)
    }
}


