import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts?userId=1'

const initialState = {
    posts: [],
    error: '',
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async ()=> {
        const response  = await axios.get(URL)
        return response.data
    }
)

export const editPostFunction = (dispatch) => {
    dispatch(editPost({id:3, title: 'This is Editted'}))
}
const sampleSlice = createSlice({ 
    name: 'posts',
    initialState,
    reducers: {
        editPost(state, action) {
            const {id, title} = action.payload
            const index = state.posts.findIndex((post) => post.id === id)
            state.posts[index]['title'] = title
        },
    },
    extraReducers:{
        [getPosts.fulfilled]:(state, action)=>{
            state.posts = action.payload
        },
        [getPosts.rejected]:(state)=> {
            state.error = 'Unable to fetch record'
        }
    }
})
export const {editPost} = sampleSlice.actions;
export default sampleSlice.reducer;