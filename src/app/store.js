import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from '../redux_slice/topic/topicsSlice';
import quizReducer from "../redux_slice/quiz/quizSlice";
import cardReducer from "../redux_slice/card/CardSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizReducer,
    card: cardReducer,

  },
});
