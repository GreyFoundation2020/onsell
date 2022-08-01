import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  signIn: false
}


export const authSlice = createSlice({
  name: 'auth',
  initialState: {value: initialState},
  reducers: {

login: ( state, action ) =>{
  state.value = action.payload
  },

  logout: ( state, action ) =>{
    state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer