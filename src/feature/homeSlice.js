import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  searchKey : '',
  totalRecord:0,
}

export const homeSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    search: (state, { payload}) => {
      state.searchKey = payload
    },
    userList: (state, { payload : { items, total_count }}) => {
    	console.log('payload',items)
      state.list = items
      state.totalRecord = total_count
    }
    
  },
})

export const { userList, search } = homeSlice.actions

export default homeSlice.reducer