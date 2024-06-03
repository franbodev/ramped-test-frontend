import initialState from './initialState';

//eslint-disable-next-line
const authReducer = (state = initialState, action: any) => {
    // const nextState = authAsyncReducer(state, action)

    switch (action.type) {
        //Sign in Actions
        case '@auth/SIGN_IN_START':
            return {
                isLoading: true,
                data: {},
            };
        case '@auth/SIGN_IN_ERROR':
            return {
                isLoading: false,
                data: {},
            };
        case '@auth/SIGN_IN_SUCCESS':
            return {
                isLoading: false,
                data: action.payload,
            };

        case '@auth/RESET_PASSWORD_START':
            return {
                ...state,
                isLoading: true,
            };
        case '@auth/RESET_PASSWORD_ERROR':
            return {
                isLoading: false,
                data: {},
            };
        case '@auth/RESET_PASSWORD_SUCCESS':
            return {
                ...state,
                isLoading: false,
            };

        case '@auth/GET_USER_INFO_START':
            return {
                ...state,
                isLoading: true,
            };
        case '@auth/GET_USER_INFO_ERROR':
            return {
                isLoading: false,
                data: {},
            };
        case '@auth/GET_USER_INFO_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };

        case '@auth/SIGN_OUT':
            return {
                isLoading: false,
                data: {},
            };

        default:
            return state;
    }
};

export default authReducer;
