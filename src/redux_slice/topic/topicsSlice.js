import { createSlice } from "@reduxjs/toolkit";


export const topicsSlice = createSlice({
    name: 'topic',
    initialState: {
        topics: {}
    },

    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload;
        },
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id);
        }
    }
})

export const topic_state_selector = (state) => state.topics.topics;

export const { addTopic, addQuizId } = topicsSlice.actions;

export default topicsSlice.reducer;