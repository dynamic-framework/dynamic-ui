import { combineReducers, configureStore } from '@reduxjs/toolkit';

import slice from './slice';

const reducer = combineReducers({
  widget: slice,
});

const store = configureStore({ reducer });

// Infer the `RootState` and `AppDispatch` types from the configureAppStore itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
