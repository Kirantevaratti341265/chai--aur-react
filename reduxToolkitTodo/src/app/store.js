import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
// Import other reducers if you have more

const rootReducer = combineReducers({
  todos: todoReducer, // Assuming todoReducer manages state for 'todos'
  // Add more reducers here if needed
});

export const store = configureStore({
  reducer: rootReducer,
  // Other store configurations if needed
});
