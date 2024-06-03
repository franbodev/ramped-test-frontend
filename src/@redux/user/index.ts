import { createDeleteReducer, createGetReducer, composeReducers, createFlushReducer } from '@redux/@reducers';
import { User, UserState } from './types';
import initialState from './initialState';

export * from './types';

const NAME = '@user';

// reducers
const getReducer = createGetReducer<User>(NAME, initialState);
const deleteReducer = createDeleteReducer<User>(NAME, initialState);
const flushReducer = createFlushReducer(NAME, []);

export const userReducer = composeReducers<UserState>(initialState)(getReducer, deleteReducer, flushReducer);

export default userReducer;
