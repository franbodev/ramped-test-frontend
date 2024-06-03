import { UserState } from './types';

const initialState: UserState = {
    data: {},
    isLoading: false,
    isCreating: false,
    isUpdating: false,
    isDeleting: false,
};

export default initialState;
