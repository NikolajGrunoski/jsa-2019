export function updateUser (username, password,name,lastname,number) {
    return { 
        type:'UPDATE_USER_AND_PASS',
        payload: {
            username, password, name, lastname, number
        }
    }
}

export function deleteUser(){
    return{
       type: 'DELETE_USER'
       
    }
}