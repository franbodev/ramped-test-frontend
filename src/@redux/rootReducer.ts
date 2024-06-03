import { combineReducers } from 'redux';

import { initialState } from './initialState';

import snacks from './snacks';
import auth from './auth';
import jobs from './jobs';

const { ...emptyInitState } = initialState;

// eslint-disable-next-line
const createAppReducer = (initialState: any) => {
    const appReducer = combineReducers({
        snacks,
        auth,
        jobs,
    });

    // eslint-disable-next-line
    return (state = initialState, action: any) => {
        const nextState = appReducer(state, action);
        if (action.type === '@auth/SIGN_OUT' || (action.error && action.payload.status === 401)) {
            if (localStorage) {
                localStorage.clear();
            }
            return {
                ...nextState,
                ...emptyInitState,
            };
        }

        return nextState;
    };
};

export default createAppReducer;
