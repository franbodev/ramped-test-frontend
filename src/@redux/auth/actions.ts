export const signIn =
    ({ email, password }: { email: string; password: string }) =>
    ({ axios }: ActionOptions) => ({
        type: '@auth/SIGN_IN',
        meta: {
            snack_success: {
                life: 2000,
                content: 'Login success!',
            },
            snack_error: {
                content: 'Login failed',
            },
        },
        payload: axios
            .post('auth/login', { email, password })
            .then((res) => {
                console.log('login res', res.data);
                return res?.data ?? {};
            })
            .catch((error) => {
                throw error.response.data;
            }),
    });

export const signUp =
    ({ email, password, passwordConfirm }: { email: string; password: string; passwordConfirm: string }) =>
    ({ axios }: ActionOptions) => ({
        type: '@auth/SIGN_UP',
        meta: {
            snack_success: {
                life: 2000,
                content: 'Signup success!',
            },
            snack_error: {
                content: 'Signup failed',
            },
        },
        payload: axios
            .post('auth/register', { email, password, passwordConfirm })
            .then((res) => {
                console.log('signup res', res.data);
                return res?.data ?? {};
            })
            .catch((error) => {
                throw error.response.data;
            }),
    });

export const signOut =
    () =>
    ({ axios }: ActionOptions) => {
        // just logout, don't hanle it
        axios.get('auth/logout').then(() => {
            return {};
        });
        localStorage.clear();
        // flush the state
        return {
            type: '@auth/SIGN_OUT',
            meta: {
                snack_success: {
                    content: 'Logged out!',
                },
            },
        };
    };
