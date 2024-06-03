export const setUser =
    (config: any) =>
    ({ axios: _ }: ActionOptions) => ({
        type: '@user/GET_SUCCESS',
        payload: config,
    });
