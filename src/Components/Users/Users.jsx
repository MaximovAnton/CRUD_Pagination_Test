import React, { useRef } from "react"
import { Paginator } from '../Common/Paginator/paginator'
import { User } from './User'

let Users = ({users, onPageChanged, currentPage, getTotalUsersCount, setCurrentPage, pageSize, postUser, putUser, deleteUser}) => {
   
    let start = (currentPage - 1) * pageSize
    let end = start + pageSize
    let slicedUsers = users.slice(start, end)
    
    const nameUsers = useRef("")
    const surnameUsers = useRef("")

    function addUser(){
        let nameUser = nameUsers.current.value
        let surnameUser = surnameUsers.current.value
        let newUser = { "name": nameUser,
                        "surname": surnameUser}
        postUser(newUser)         
    }
    
    return( 
        <div>
            <Paginator  totalUsersCount={users.length}
                        onPageChanged={onPageChanged}
                        currentPage={currentPage}
                        getTotalUsersCount={getTotalUsersCount}
                        setCurrentPage={setCurrentPage}
                        pageSize={pageSize}
                        />
            <div>
                <h2>Вы находитесь на {currentPage}-й странице</h2>
            {
                slicedUsers.map(user => <User key={user._id}
                                            user_id={user.user_id}
                                            names={user.name}
                                            surname={user.surname}
                                            putUser={putUser}
                                            newUser={user.newUser}
                                            nameUsers={nameUsers}
                                            surnameUsers={surnameUsers}
                                            deleteUser={deleteUser}/>)
            }
            </div>
            <div className="form">
                <input ref={nameUsers} type="text" placeholder="введите номер"/>
                <input ref={surnameUsers} type="text" placeholder="введите name"/>
                <button onClick={addUser}>Добавить юзера</button>
            </div>
        </div>
    )
}

export default Users