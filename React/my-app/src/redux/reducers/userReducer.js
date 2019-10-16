
export function userReducer (
    state = {username: null, password: null, name: null, lastname: null, number: null}, action) {
    switch (action.type){
        case 'UPDATE_USER_AND_PASS': {
            return {...state,
                 username: action.payload.username,
                 password: action.payload.password,
                 name: action.payload.name,
                 lastname: action.payload.lastname,
                 number: action.payload.number
                }
        }

        case 'DELETE_USER' : {
            return {...state,
                name: null,
                lastname: null,
                number: null
            }
        }
        
        default : {
            return {...state}
        }
    }
}
