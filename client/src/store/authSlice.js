import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null
    },
    reducers: {
      todoAdded(state, action) {
        state.push({
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        })
      },
      todoToggled(state, action) {
        const todo = state.find(todo => todo.id === action.payload)
        todo.completed = !todo.completed
      }
    }
})


export default authSlice.reducer