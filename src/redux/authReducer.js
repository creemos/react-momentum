let initialState = {
    userId: 1,
    login: '',
    password: '',
    fullName: '123213',
    isAuth: false
}

const SET_USER_DATA = 'SET_USER_DATA'

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default: 
            return state
    }
}