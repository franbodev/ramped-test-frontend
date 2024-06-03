import {
    composeReducers,
    createFlushReducer,
    createGetWithPaginationReducer,
    createCreateInArrayReducer,
    createUpdateInArrayReducer,
} from '@redux/@reducers';

import initialState from './initialState';

const NAME = '@jobs';

// reducers
const getReducer = createGetWithPaginationReducer<IJob.Payload>(NAME, initialState);
const flushReducer = createFlushReducer(NAME, []);
const createReducer = createCreateInArrayReducer<IJob.Payload>(NAME, initialState);
const updateReducer = createUpdateInArrayReducer<IJob.Payload>(NAME, initialState);
export const SkipDatesReducer = composeReducers<IJob.State>(initialState)(
    getReducer,
    flushReducer,
    createReducer,
    updateReducer
);

export default SkipDatesReducer;
