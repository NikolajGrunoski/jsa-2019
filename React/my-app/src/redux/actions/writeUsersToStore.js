import axios from "axios"

export function writeUsersToStore (data) {
    return {
        type: 'WRITE_USERS',
        payload: data
    }
}

export function addUserToStore (user) {
    return function(dispach) {
        axios.get('nekoe url').then(()=>{
            dispach({
                type: 'SAVE_USER',
                payload: user
            })
        })
    }
}

export function removeUserToStore (data) {
    return {
        type: 'DELETE_USER',
        payload: data
    }
}