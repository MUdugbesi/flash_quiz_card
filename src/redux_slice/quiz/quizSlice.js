import { createSlice } from "@reduxjs/toolkit";
export const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
})

export const { addQuiz } = quizSlice.actions;

export const quiz_state_selector = (state) => state.quizzes.quizzes;

export default quizSlice.reducer;