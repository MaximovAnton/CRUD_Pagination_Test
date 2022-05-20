import React from 'react'
import { connect } from 'react-redux'
import { setCurrentPage, getUsers, postUsers, putUser, deleteUser} from '../../Redux/users-reducer'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'
import { compose } from 'redux'
import {getUsersSelector, getIsFetching, getCurrentPage, getPageSize } from '../../Redux/user-selectors'

class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users  users={this.props.users} 
                    postUsers={postUsers}
                    onPageChanged={this.onPageChanged}
                    getTotalUsersCount={this.getTotalUsersCount}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.props.setCurrentPage}
                    pageSize={this.props.pageSize}
                    postUser={this.props.postUsers}
                    putUser={this.props.putUser}
                    deleteUser={this.props.deleteUser} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        isFetching: getIsFetching(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        getUsers,
        postUsers,
        putUser,
        deleteUser
    })
)(UsersContainer)