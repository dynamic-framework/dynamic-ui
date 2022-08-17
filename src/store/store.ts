import { combineReducers, configureStore } from '@reduxjs/toolkit';

import widget from './slice';

const reducer = combineReducers({
  widget,
});

const store = configureStore({ reducer });

// Infer the `RootState` and `AppDispatch` types from the configureAppStore itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
