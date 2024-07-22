import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        pass: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
            state.pass = action.payload.pass
            console.log(state.user, state.pass)
        },
        logout: (state) => {
            
            console.log('logout', { user: state.user, pass: state.pass})
            state.user = null
            state.pass = null
            console.log({ user: state.user, pass: state.pass})
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer