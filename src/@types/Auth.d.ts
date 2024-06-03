declare namespace IAuth {
    type State = StateWithObjectPayload<Payload>;

    interface Payload {
        id: number;
        username?: string;
        email?: string;
        access_token?: string;
        created_at?: string;
        updated_at?: string;
    }
}
