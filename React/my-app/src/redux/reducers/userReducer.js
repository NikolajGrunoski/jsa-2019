
export function userReducer (state = {username: 'Niki'}, action) {
    switch (action.type){
        case 'CHANGE': {
            return {...state, username: 'Koco'}
        }
        default : {
            return {...state}
        }
    }
}
