export type UserInput = {
    name?: string;
    email?: string;
};

export type User = UserInput & {
    id?: string;
};

export type UserState = StateWithObjectPayload<User>;
