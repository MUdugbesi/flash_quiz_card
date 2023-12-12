import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: 'card',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload;
        }
    }
})

export const { addCard } = cardSlice.actions;
export const card_state_selector = (id) => (state) => state.card.cards[id];
export default cardSlice.reducer;