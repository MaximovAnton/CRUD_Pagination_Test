import React from 'react'
import userPhoto from '../../assets/images/ava.jpg'
import s from './Users.module.css'

export const User = ({user_id, names, surname, putUser, nameUsers, surnameUsers, deleteUser}) => {

    const editUser = (user_id, nameUser, surnameUser) => {
        let newUser = { "name": nameUser.current.value,
                        "surname": surnameUser.current.value}
        putUser(user_id, newUser)         
    }

    return (
        <div className={s.userCard}>
            <img src={userPhoto} alt="photo" className={s.photo} />
            <div>
                <span>{user_id}</span>
                <div>{names}</div>
                <div>{surname}</div>
            </div>      
            <button onClick={() => editUser(user_id,nameUsers,surnameUsers)}>Редактировать</button>  
            <button onClick={() => deleteUser(user_id)}>Удалить</button>  
        </div>
    )
}