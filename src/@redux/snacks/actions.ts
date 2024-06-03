import snackDefaultOptions from './snackDefaultOptions';
import { SnackInput } from './types';

export const snackAdd = (snack: SnackInput) => ({
    type: '@snack/ADD',
    payload: {
        ...snackDefaultOptions,
        ...snack,
    },
});

export const snackDelete = (id: SnackInput['id']) => ({
    type: '@snack/DELETE',
    payload: id,
});
