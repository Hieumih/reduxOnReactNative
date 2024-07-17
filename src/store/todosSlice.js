import { createSlice } from '@reduxjs/toolkit'


const todosSlice = createSlice({
    name: 'todos',
    initialState: [
        {
            text: 'helloworld',
            completed: true
        },
        {
            text: 'helloworld2',
            completed: false
        },
    ],
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload)
            state.push(action.payload)
        },
        removeTodo: (state, action) => {
            return state.filter((todo, index) => index !== action.payload)
        },
        toggleTodo: (state, action) => {
            state[action.payload].completed = !state[action.payload].completed
        }
    }
})

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer