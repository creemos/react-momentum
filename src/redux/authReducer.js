let initialState = {
    username: '',
    city: 'Moscow',
    isAuth: false,
    todos: []
}

const SET_USER_DATA = 'SET_USER_DATA'
const SET_AUTH = 'SET_AUTH'
const SET_CITY = 'SET_CITY'
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                username: action.payload
            }
        }
        case SET_AUTH: {
            return {
                ...state,
                isAuth: action.payload
            }
        }
        case SET_CITY: {
            return {
                ...state,
                city: action.payload
            }
        }
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        }
        case REMOVE_TODO: {
            return {
                ...state,
                todos: [...state.todos.slice(0, action.payload),
                    ...state.todos.slice(action.payload + 1)
                ]
            }
        }
        case TOGGLE_COMPLETED: {
            return {
                ...state,
                todos: [
                    ...state.todos.map(i => i.id - 1 === action.payload ? {...i, completed: !i.completed} : i)
                ]
            }
        }
        default:
            return state
    }
}

export const AuthActionCreators = {
    setUser: (username) => ({
        type: SET_USER_DATA,
        payload: username
    }),
    setIsAuth: (auth) => ({
        type: SET_AUTH,
        payload: auth
    }),
    setCity: (city) => ({
        type: SET_CITY,
        payload: city
    }),
    addTodo: (todo) => ({
        type: ADD_TODO,
        payload: todo
    }),
    removeTodo: (id) => ({
        type: REMOVE_TODO,
        payload: id
    }),
    toggleCompleted: (id) => ({
        type: TOGGLE_COMPLETED,
        payload: id
    }),
    login: (username) => async (dispatch) => {
        try {
            dispatch(AuthActionCreators.setUser(
                username
            ))
            dispatch(AuthActionCreators.setIsAuth(true))
        } catch (e) {
            console.log(e)
        }
    },
    logout: () => async dispatch => {
        try {
            localStorage.removeItem('username')
            await dispatch(AuthActionCreators.setIsAuth(false))
            dispatch(AuthActionCreators.setUser(''))

        } catch (e) {
            console.log(e)
        }
    }
}