import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {fetch2,fetch3} from '../helpers/fetch2'
const initialState = []

export const createTodo = createAsyncThunk(
    'createtodo',
    async (body)=>{
       const result =  await fetch2('/createtodo',body)
       return result  
    }
)
export const fetchTodo = createAsyncThunk(
    'fetchtodos',
    async ()=>{
       const result =  await fetch3('/gettodos',"get")
       return result  
    }
)
export const deleteTodo = createAsyncThunk(
    'deletetodo',
    async (id)=>{
       const result =  await fetch3(`/remove/${id}`,"delete")
       return result  
    }
)

const todoReducer = createSlice({
    name:"todo",
    initialState,
    reducers:{
    },
    extraReducers:{
        [createTodo.fulfilled]:(state,{payload:{message}})=>{
            if(message) state.push(message)
        },
        [fetchTodo.fulfilled]:(state,{payload:{message}})=>{
            return message
        },
        [deleteTodo.fulfilled]:(state,{payload:{message}})=>{
           const removedTodo =  state.filter(item=>{
                return item._id != message._id
            })
            return removedTodo
        }
    }

})

export default todoReducer.reducer