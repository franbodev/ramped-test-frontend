import { AnyAction } from 'redux';

/**
 * Processes data and pagination from the server response
 * Saves data and pagination as { data, pagination }
 * Data is expected to be an array
 * modifies isLoading of the state
 *
 * @param baseName
 * @param initialState
 * @param options
 */
export function createGetWithPaginationReducer<D>(
    baseName: string,
    initialState: DefaultState<D[]>,
    options: ReducerOptions = {}
) {
    return function getWithPaginationReducer(
        state: DefaultState<D[]> | undefined,
        action: AnyAction
    ): DefaultState<D[]> {
        const { flushOnError = false, flushOnStart = false } = options;

        switch (action.type) {
            case `${baseName}/GET_START`:
                return flushOnStart
                    ? {
                          ...initialState,
                          isLoading: true,
                          isInitLoading: false,
                      }
                    : {
                          ...state,
                          isLoading: true,
                          isInitLoading: false,
                      };

            case `${baseName}/GET_ERROR`:
                return {
                    ...state,
                    isLoading: false,
                    data: flushOnError ? initialState.data : state?.data,
                };
            case `${baseName}/GET_SUCCESS`: {
                console.log('action: ', action.payload);
                const { data, ...pagination } = action.payload;
                return {
                    ...state,
                    data: data,
                    pagination,
                    isLoading: false,
                };
            }

            default:
                return state ?? {};
        }
    };
}

export default createGetWithPaginationReducer;
